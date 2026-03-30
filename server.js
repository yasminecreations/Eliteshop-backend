const express = require("express");


const app = express();

app.use(express.json());

const PAYPAL_CLIENT = "AW6xOGgfvw8GPKdOvuxf8u1qHmqlYNT0yITUubk5XbemmbQEPeq7-yaVuPeZmDTzg3EazO2si-qgPVO0";
process.env.PAYPAL_CLIENT;
const PAYPAL_SECRET = "EM_WBihZBp31WsnHNZzACeihhq6VQp9g2-S9hHXcRJA52twCa2QC9xdUBMYQPrYE1B1Fac_7kV2pOsd3";
process.env.PAYPAL_SECRET;

app.get("/", function(req, res) {
  res.send("Server is working!");
});


app.post("/test", function(req, res) {
  console.log("Data received:", req.body);
  res.send("Data received successfully");
});


async function generateAccessToken() {
  const auth = Buffer.from(PAYPAL_CLIENT + ":" + PAYPAL_SECRET).toString("base64");

  const response = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + auth,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });

  const data = await response.json();
  
  console.log("PayPal response:", data);
  return data.access_token;
}


app.get("/test-paypal", async function(req, res) {
  try {
    const token = await generateAccessToken();
    res.send({ token: token });
  } catch (err) {
    console.error(err);
    res.send("Error getting token");
  }
});

app.post("/create-order", async (req, res) =>{
  try {
    const token = await generateAccessToken();
    const { total } = req.body;

    const response = await fetch(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "MAD",
                value: total,
              },
            },
          ],
        }),
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating order");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Server running on port"
 + PORT );
});
const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());

const PAYPAL_CLIENT = "AX2YxD1XT4OtyW86oFPJyB1_kxGOqYN2NvKWnlbzE8D3kF39TdhhnIs94GJPDRrmP8oIMQZkzowcY1mx";
const PAYPAL_SECRET = "ECYh7cPRiqyxSFU4SjufE8V6jyA4bSjaSjCqn5z1eoeTyMUlHsTk5ZUYQJEmj3wkQijzXI1zJXJNoIif";


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

app.listen(3000, function() {
  console.log("Server running on http://localhost:3000");
});
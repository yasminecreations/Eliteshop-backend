const productSchema = new mongoose.Schema({
    id: Number, 
    name: String,
    price: Number,
    status: String,
    image: String,
    images: [String],
    description: String,
    sizes: [String],
    sizess: [String], 
    images2: [String],
    description2: String
});

const Product = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');
const Product = require('./models/Product'); 

// Your array from the photo
const myProducts = [
    { 
        id: 1, 
        name: "gold starfish Bracelet / سوار نجم البحر", 
        price: 80, 
        status: "⍟ Instock",
        image: "images/ni (72).jpeg", 
        images: ["images/ni (72).jpeg", "images/ni (73).jpeg", "images/ni (74).jpeg", "images/d.png"],
        description: "This striking, gold-toned starfish cuff bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار 'كاف' ذهبي لافت للأنظار، يتميز بتصميم مستوحى من البحر يتكون من عدة نجوم بحر متصلة ببعضها البعض مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        
        sizes: ["Adjustable"],
        
        sizess:["."],
        images2: ["images/ni (72).jpeg",  "images/d.png",  "images/lovee.jpeg"],
        description2: " Ce Bracelet est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 2, 
        name: " Hammered Coin Bracelet / سوار الدوائر المقروطة" , 
        price: 120, 
         status: "⍟ Instock",
        image: "images/ni (75).jpeg" ,

        images: ["images/ni (75).jpeg", "images/ni (76).jpeg", "images/ni (77).jpeg", "images/ni (78).jpeg"],
        description: "This striking, gold-toned Hammered Coin bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم مستوحى من البحر يتكون من عدة نجوم بحر متصلة ببعضها البعض مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["Adjustable"],
        sizes2:["2"],
        images2: ["images/nie (75).jpeg",  "images/nie (76).jpeg", "images/ni (78).jpeg"],
        description2: " Ce Bracelet est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 3, 
        name: "Molten Metal Bracelet / سوار المنحوت العصري " , 
        price: 120,
         status: "⍟ Instock", 
        image:"images/f.png" ,


        images: ["images/f.png", "images/ni (80).jpeg", "images/ni (81).jpeg", "images/ni (82).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم مستوحى من البحر يتكون من عدة نجوم بحر متصلة ببعضها البعض مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["Adjustable"],
        images2: ["images/ni (80).jpeg",  "images/f.png", "images/ni (82).jpeg"],
        description2: " Ce Bracelet est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 4, 
        name: "Silver White Gemstones ring" , 
        price: 100, 
         status: "⍟ Instock",
        image:"images/ni (84).jpeg" ,


        images: ["images/ni (84).jpeg", "images/ni (83).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم مستوحى من البحر يتكون من عدة نجوم بحر متصلة ببعضها البعض مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["8"],
        images2: ["images/ni (84).jpeg", "images/ni (83).jpeg"],
        description2: " Ce Bracelet est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },

    { 
        id: 5, 
        name: "Royal Emerald Ring " , 
        price: 99, 
         status: "⍟ Instock",
        image:"images/ytyt (2).jpeg" ,


        images: ["images/ytyt (2).jpeg", "images/ytyt.jpg", "images/ytyt (1).jpeg","images/ytyt.png" ],
        description: "This striking, Emerald Ring features a series of textured Emerald Stones linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا  لافت للأنظار، يتميز بتصميم مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["6 "," 7"],
        images2: ["images/ytyt (2).jpeg", "images/ytyt.png", "images/ytyt (1).jpeg"],
        description2: " Bague D'Emerald Royal "
    },
    { 
        id: 6, 
        name: "Silver Adjustable Bracelet" , 
        price: 69, 
         status: "⍟ Instock",
        image:"images/lola (2).jpg" ,


        images: ["images/lola (2).jpg", "images/lola (1).jpg", "images/h.png"],
        description: "This striking, Silver-toned  bracelet  wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["Adjustable"],
        images2: ["images/lola (1).jpg", "images/h.png", "images/lola (2).jpg"],
        description2: " Ce Bracelet est fabriqué en acier inoxydable de haute qualité,Il aborde une finition Argentée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 8, 
        name: " Layser-cut Flower Layered Chain" , 
        price: 119, 
        status: "⍟ Instock",
        image:"images/iku.jpg" ,
        

        images: ["images/iku.jpg", "images/n.png"],
        description: "This striking, gold-toned Necklace features a series of textured flowers linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا  لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["Taille Unique"],
        images2: [ "images/ne.png"],
        description2: " Ce Collier est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 9, 

        name: "Spinelli Kilcollin Leo Diamond Ring " , 
        price: 100, 
         status: "⍟ Instock",
        image:"images/per (1).jpg" ,


        images: ["images/per (1).jpg", "images/per (2).jpg", "images/nn.png"],
        description: "This striking, gold-toned Ring features a series of textured Hoops linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا  لافت للأنظار، يتميز بتصميم مستوحى مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["6"],
        images2: ["images/per (2).jpg", "images/nne.png", "images/per (1).jpg"],
        description2: " Cette bague est fabriquée en acier inoxydable de haute qualité,elle aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    
    { 
        id: 11, 
        name: "3 Metal Beaded Necklace + Bracelet" , 
        price: 170, 
         status: "⍟ Instock",
        image:"images/drg (2).jpg" ,


        images: ["images/drg (2).jpg", "images/prdct1.png", "images/drg.jpg"],
        description: "This striking, item features a series of beads, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["Taille Unique"],
        images2: ["images/drg (2).jpg", "images/prdct1.png", "images/drg.jpg"],
        description2: " Cet ensemble est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 12, 
        name: " Black Gemstones Bracelet " , 
        price: 70, 
         status: "⍟ Instock",
        image:"images/tyu.jpeg" ,


        images: ["images/tyu.jpeg", "images/tyu.jpg", "images/nnnnn.png"],
        description: "This striking,  bracelet features a series of textured gemstones linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["Taille Unique, gourmette"],
        images2: ["images/tyu.jpeg", "images/tyu.jpg", "images/nnnnn.png"],
        description2: " Ce Bracelet est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 13, 
        name: " Rectangular Purple Gemstones Bracelet " , 
        price: 70, 
         status: "⍟ Instock",
        image:"images/ni (28).jpeg" ,


        images: ["images/ni (28).jpeg", "images/tyu.jpg", "images/nnnnnn.png"],
        description: "This striking,  bracelet features a series of textured gemstones linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["Taille unique, gourmette"],
        images2: ["images/ni (28).jpeg", "images/tyu.jpg", "images/nnnnnn.png"],
        description2: " Ce Bracelet est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 14, 
        name: "Gold Vintage Pink Round Stone  " , 
        price: 50, 
         status: "⍟ Instock",
        image:"images/rt.jpg" ,


        images: ["images/rt.jpg", "images/prdct (1).png"],
        description: "This striking, gold-toned Molten Metal ring , wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["Adjustable"],
        images2: ["images/prdct (1).png", "images/rt.jpg"],
        description2: " Ce bijou est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 15, 
        name: "Emerald Gemstones Ring" , 
        price: 99, 
         status: "⍟ Instock",
        image:"images/lili.jpeg" ,


        images: ["images/lili.jpeg", "images/prdct (3).png", "images/lili.jpg"],
        description: "This striking, Silver-toned Molten Metal ring , wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["9"],
        images2: ["images/lili.jpg", "images/prdct (3).png", "images/lili.jpg"],
        description2: " Cette bague est fabriqué en acier inoxydable de haute qualité,Il aborde une finition ARGENTéE éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 16, 
        name: "sILVER WHITE Gemstones Ring with emerald stones" , 
        price: 99, 
         status: "⍟ Instock",
        image:"images/meg (1).jpg" ,


        images: ["images/meg (1).jpg", "images/prdct (2).png", "images/meg (2).jpg","images/meg (3).jpg"],
        description: "This striking, Silver-toned Molten Metal ring , wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["9"],
        images2: ["images/meg (1).jpg", "images/prdct (2).png", "images/meg (3).jpg"],
        description2: " Cette bague est fabriqué en acier inoxydable de haute qualité,Il aborde une finition ARGENTéE éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 17, 
        name: " Two Emerald Flowers Ring" , 
        price: 99, 
         status: "⍟ Instock",
        image:"images/zelya.jpg" ,


        images: ["images/zelya.jpg", "images/prdct (4).png"],
        description: "This striking, Silver-toned Molten Metal ring , wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["6", "7","8"],
        images2: ["images/zelya.jpg", "images/prdct (4).png"],
        description2: " Cette bague est fabriqué en acier inoxydable de haute qualité,Il aborde une finition ARGENTéE éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 18, 
        name: " Gold Twist Bracelet " , 
        price: 99, 
         status: "⍟ Instock",
        image:"images/paula.jpg" ,


        images: ["images/paula.jpg", "images/prdct (6).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured Twist linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks. هذا سوار  ذهبي لافت للأنظار، يتميز بتصميم  مع تفاصيل بارزة وملمس واقعي، مما يجعله قطعة إكسسوار مثالية لإطلالة صيفية عصرية وجذابة.", 
        sizes: ["6"],
        images2: ["images/prdct (6).png", "images/paula.jpg"],
        description2: " Ce Bracelet est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 19, 
        name: "Gold Knot Bracelet " , 
        price: 99, 
         status: "⍟ Instock",
        image:"images/lizzy.jpg" ,


        images: ["images/lizzy.jpg", "images/prdct (7).png"],
        description: "This striking, toned Molten Metal item is bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks.", 
        sizes: ["Adjustable"],
        images2: ["images/lizzy.jpg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition  éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 20, 
        name: "Silver Diamond Drop Earrings " , 
        price: 119, 
         status: "⍟ Instock",
        image:"images/prdct (9).jpg" ,


        images: ["images/prdct (9).jpg"],
        description: "This striking, toned Molten Metal item is bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks.", 
        sizes: ["Taille unique"],
        images2: ["images/prdct (9).jpg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition  éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 21, 
        name: "Dark Night Square Gemstones Earrings " , 
        price: 89, 
         status: "⍟ Instock",
        image:"images/ni (85).jpeg" ,


        images: ["images/ni (85).jpeg" ,"images/prdct (10).png", "images/kayla.jpg"],
        description: "This striking, toned Molten Metal item is bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks.", 
        sizes: ["Taille unique"],
        images2: ["images/ni (85).jpeg" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition  éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 22, 
        name: "Four Stacked Cartier Clou Rings " , 
        price: 89, 
         status: "⍟ Instock",
        image:"images/prdct (11).png" ,


        images: ["images/cynthia.jpg" ,"images/prdct (11).png"],
        description: "This striking, toned Molten Metal item is bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks.", 
        sizes: ["6","7"],
        images2: ["images/prdct (11).png" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition  éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 23, 
        name: " Gold Double Round Pink Stones Vintage Ring " , 
        price: 50, 
         status: "⍟ Instock",
        image:"images/leah.png" ,


        images: ["images/leah.png", "images/prdct (12).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: ["images/prdct (12).png"],
    
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 24, 
        name: " Gold double pink oval and round stone vintage ring" , 
        price: 50, 
         status: "⍟ Instock",
        image:"images/barbara.png" ,


        images: ["images/barbara.png", "images/prdct (13).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: [ "images/prdct (13).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 25, 
        name: "  5  Resin Rings" , 
        price: 100, 
         status: "⍟ Instock",
        image:"images/amber.jpg" ,


        images: ["images/amber.jpg", "images/ol (2).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["8"],
        images2: ["images/amber.jpg","images/ol (2).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 26, 
        name: "Silver Gold Cross sign round earings" , 
        price: 100, 
         status: "⍟ Instock",
        image:"images/chloe.jpg" ,


        images: ["images/chloe.jpg", "images/ol (3).png","images/ni (61).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/chloe.jpg","images/ol (3).png","images/ni (61).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 27, 
        name: "Black charcoal pendant earings" , 
        price: 120, 
         status: "⍟ Instock",
        image:"images/eve.jpg" ,


        images: ["images/eve.jpg", "images/ol (5).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/ol (5).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 28, 
        name: "Van Cleef Silver Flower Bracelet" , 
        price: 79, 
         status: "⍟ Instock",
        image:"images/ivana.jpg" ,


        images: ["images/ivana.jpg", "images/ni (57).jpeg", "images/ni (58).jpeg", "images/ni (59).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique gourmette"],
        images2: ["images/ivana.jpg", "images/ni (59).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 29, 
        name: "Gold spark gemstone necklace + Bracelet" , 
        price: 129, 
         status: "⍟ Instock",
        image:"images/karen.jpg" ,


        images: ["images/karen.jpg", "images/ni (53).jpeg", "images/ni (54).jpeg", "images/ni (55).jpeg" , "images/ni (56).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/karen.jpg", "images/ni (53).jpeg", "images/ni (54).jpeg", "images/ni (55).jpeg" , "images/ni (56).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },   { 
        id: 30, 
        name: " Gold spark gemstone spirale Ring + Bracelet" , 
        price: 179,
         status: "⍟ Instock", 
        image:"images/patricia.jpg" ,


        images: ["images/patricia.jpg", "images/ol (9).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["5","6","7","8","9"],
        sizess: ["6"],
        images2: [ "images/ol (9).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    }, 
    { 
        id: 31, 
        name: " Emerald beaded droplet earings" , 
        price: 119, 
         status: "⍟ Instock",
        image:"images/jessica.jpg" ,


        images: ["images/jessica.jpg", "images/ol (10).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: [ "images/ol (10).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 32, 
        name: "silver bracelet cuff hexogone ring + Bracelet" , 
        price: 150, 
         status: "⍟ Instock",
        image:"images/raven.jpg" ,


        images: ["images/raven.jpg", "images/ol (11).png", "images/ni (64).jpeg", "images/ni (65).jpeg", "images/ni (68).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: [ "images/ol (11).png", "images/ni (64).jpeg", "images/ni (65).jpeg", "images/ni (68).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 33, 
        name: "Gold bracelet cuff hexogone ring + Bracelet" , 
        price: 150, 
         status: "⍟ Instock",
        image:"images/ni (71).jpeg " ,


        images: ["images/ni (71).jpeg ", "images/ni (69).jpeg ", "images/ni (70).jpeg ", "images/ni (67).jpeg ", "images/ni (66).jpeg "],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: [ "images/ni (71).jpeg ", "images/ni (69).jpeg ", "images/ni (70).jpeg ", "images/ni (67).jpeg ", "images/ni (66).jpeg "],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 34, 
        name: "Gold spark gemstone stack bracelet" , 
        price: 129, 
        
         status: "⍟ Instock",
        image:"images/stacey.jpg " ,


        images: ["images/stacey.jpg ", "images/oll (2).png "],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["6"],
        images2: [ "images/stacey.jpg ", "images/oll (2).png "],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },

    { 
        id: 36, 
        name: "Gold cuff bracelet with bow" , 
        price: 149, 
         status: "⍟ Instock",
        image:"images/oll (4).png" ,


        images: ["images/oll (4).png", "images/images.jpeg "],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: [ "images/oll (4).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 37, 
        name: " Emerald flower silver bracelet" , 
        price: 130, 
         status: "⍟ Instock",
        image:"images/emma.jpg" ,


        images: ["images/emma.jpg","images/oll (5).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique Gourmette"],
        images2: [ "images/oll (5).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 38, 
        name: " Cyan Stone Gold Necklace" , 
        price: 59, 
         status: "⍟ Instock",
        image:"images/ni (52).jpeg" ,


        images: ["images/ni (52).jpeg","images/oll (6).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: [ "images/oll (6).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 39, 
        name: "  Golden leafs Necklace" , 
        price: 99, 
         status: "⍟ Instock",
        image:"images/ni (48).jpeg" ,


        images: ["images/ni (48).jpeg","images/ni (49).jpeg","images/ni (50).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: [ "images/ni (49).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 40, 
        name: "Gold Snowflake Necklace" , 
        price: 89, 
         status: "⍟ Instock",
        image:"images/sydney.jpg" ,


        images: ["images/sydney.jpg","images/oll (8).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/sydne.jpg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 41, 
        name: "Gold quatz sword Necklace" , 
        price: 89,
         status: "⍟ Instock", 
        image:"images/ni (45).jpeg" ,


        images: ["images/ni (45).jpeg","images/ni (46).jpeg","images/ni (47).jpeg","images/oll (9).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/oll (9).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 42, 
        name: "Gemstone Touch Gold Necklace" , 
        price: 79,
         status: "⍟ Instock", 
        image:"images/ni (45).jpeg" ,


        images: ["images/ni (45).jpeg","images/oll (10).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/oll (10).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 43, 
        name: "Two layered Bracelet simple + white Gemstone" , 
        price: 79, 
         status: "⍟ Instock",
        image:"images/ni (40).jpeg" ,


        images: ["images/ni (40).jpeg","images/oll (11).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/ni (40).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 44, 
        name: "gold purse Necklace" , 
        price: 60, 
         status: "⍟ Instock",
        image:"images/ni (39).jpeg" ,


        images: ["images/ni (39).jpeg","images/oll (12).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/oll (12).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 45, 
        name: "Gold Stamp Necklace" , 
        price: 99, 
         status: "⍟ Instock",
        image:"images/ni (38).jpeg" ,


        images: ["images/ni (38).jpeg","images/oll (13).png","images/ni (36).jpeg","images/ni (37).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/ni (37).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 46, 
        name: "Golden Eye Gemstone Necklace" , 
        price: 99,
         status: "⍟ Instock", 
        image: "images/ni (35).jpeg" ,


        images: ["images/ni (35).jpeg","images/ni (32).jpeg","images/ni (33).jpeg","images/ni (34).jpeg","images/oll (14).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/ni (35).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 47, 
        name: " Gold Thick RADKO " , 
        price: 99, 
         status: "⍟ Instock",
        image: "images/jina.jpg" ,


        images: ["images/jina.jpg","images/oll (15).png"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/jina.jpg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 48, 
        name: "Gold Snake Necklace" , 
        price: 119, 
         status: "⍟ Instock",
        image: "images/oll (16).png"  ,


        images: ["images/oll (16).png" ,"images/oll (16) - copie.png" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/oll (16).png" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 49, 
        name: "Gold Double V chain" , 
        price: 139,
         status: "⍟ Instock", 
        image: "images/oll (17).png"  ,


        images: ["images/oll (17).png" ,"images/oll (17)-.png","images/oll (17)+.png" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/oll (17).png" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 50, 
        name: "Silver Diamond Sphere earings" , 
        price: 129, 
         status: "⍟ Instock",
        image:"images/ni (13).jpeg"  ,


        images: ["images/ni (13).jpeg"  ,"images/ni (12).jpeg" ,"images/ni (15).jpeg","images/ni (16).jpeg"   ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/ni (15).jpeg"  ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 51, 
        name: "Three Diamond hoops earings" , 
        price: 119,
         status: "⍟ Instock", 
        image:"images/ni (11).jpeg",


        images: ["images/ni (11).jpeg"  ,"images/ni (8).jpeg" ,"images/ni (9).jpeg","images/ni (10).jpeg"   ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/ni (10).jpeg"  ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 52, 
        name: "Gold Diamond Gemstones droplet earings" , 
        price: 119, 
         status: "⍟ Instock",
        image:"images/ni (19).jpeg",


        images: ["images/ni (19).jpeg" ,"images/ni (17).jpeg" ,"images/ni (18).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/ni (17).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 53, 
        name: "Gold Leopard pattern earings" , 
        price: 119, 
         status: "⍟ Instock",
        image:"images/lisa.jpg",


        images: ["images/lisa.jpg" ,"images/oll (21).png" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/lisa.jpg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 54, 
        name: " Gold Vintage Necklace" , 
        price: 69, 
         status: "⍟ Instock",
        image:"images/oll (22).png",


        images: ["images/oll (22).png" ,"images/oll (22)-.png" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/oll (22)-.png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 55, 
        name: "Necklace Vintage Pendant necklace" , 
        price: 79, 
         status: "⍟ Instock",
        image:"images/oll (23).png",


        images: ["images/oll (23).png" ,"images/oll (23)-.png" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/oll (23)-.png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 56, 
        name: "3 colors beaded earings" , 
        price: 79, 
         status: "⍟ Instock",
        image:"images/christine.jpg",


        images: [ "images/christine.jpg","images/oll (24).png" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/oll (24).png"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 57, 
        name: "Elastic Beaded Ring" , 
        price: 79, 
         status: "⍟ Instock",
        image:"images/ni (31).jpeg",


        images: ["images/ni (31).jpeg","images/oll (25).png" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: ["images/ni (31).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 58, 
        name: "Gold dazzled pin bracelet" , 
        price: 120, 
         status: "╳ Out Of stock",
        image:"images/ella.jpg",


        images: ["images/ella.jpg","images/oll (26).png" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["indisponible-horsStock"],
        images2: ["images/ella.jpg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 59, 
        name: "Jouher L'Hour Stack Ring" , 
        price: 79, 
         status: "⍟ Instock",
        image:"images/ni (6).jpeg",


        images: ["images/ni (6).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: ["images/ni (6).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 60, 
        name: "Forest Green square Gemstones earings" , 
        price: 89,
         status: "⍟ Instock", 
        image:"images/jade.jpg",


        images: ["images/jade.jpg","images/ni (2).jpeg","images/ni (3).jpeg","images/ni (4).jpeg","images/ni (5).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille Unique"],
        images2: ["images/ni (2).jpeg","images/ni (5).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 61, 
        name: " Rose Gold Pattern Bracelet" , 
        price: 99, 
         status: "⍟ Instock",
        image:"images/eline.jpg",


        images: ["images/eline.jpg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes:["adjustable"],
        images2: ["images/eline.jpg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 62, 
        name: "Gold Colored Stones Ring" , 
        price: 59, 
         status: "⍟ Instock",
        image:"images/penny (1).jpg",


        images: ["images/penny (1).jpg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: ["images/penny (1).jpg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 63, 
        name: " rose gold Gemstone Vertical Earrings " , 
        price: 89, 
         status: "⍟ Instock",
        image:"images/penny (2).jpg" ,


        images: ["images/penny (2).jpg" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/penny (2).jpg" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 64, 
        name:"Gold Colored Stones Bracelet", 
        price: 89, 
         status: "⍟ Instock",
        image:"images/penny (3).jpg" ,


        images: ["images/penny (3).jpg","images/ringgg.jpg" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["10"],
        sizess: ["6.2"],
        images2: ["images/penny (3).jpg" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 65, 
        name:" Snowflake Gold Ring", 
        price: 79,
         status: "⍟ Instock", 
        image:"images/tyuiop.jpg" ,


        images: ["images/penny (5).jpg", "images/tyuiop.jpg" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["7","8","9" ],
        images2: ["images/penny (5).jpg" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 66, 
        name:"Gold Hoops Necklace + Earrings ", 
        price: 89, 
         status: "⍟ Instock",
        image:"images/nckll.jpg" ,


        images: ["images/penny (6).jpg","images/nckll.jpg" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: ["images/didi.jpg" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 67, 

    name:"Gold Lock Bracelet  ", 
        price: 89, 
         status: "⍟ Instock",
        image:"images/croco.jpg" ,


        images: ["images/penny (7).jpg", "images/croco.jpg" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: ["images/pfppfp.png" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 68, 

    name:"BaGue Marriage Flacon De Neige ", 
        price: 59, 
         status: "⍟ Instock",
        image:"images/gemmm.jpeg" ,


        images: ["images/gemmm.jpeg", "images/wd.jpeg" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/wd.jpeg" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 69, 

    name:"Simple Collier Dore  ", 
        price: 69, 
         status: "⍟ Instock",
        image:"images/weddd.jpeg" ,


        images: ["images/weddd.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/weddd.jpeg" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 70, 

    name:" gold heavy trendy hoops", 
        price: 59, 
         status: "⍟ Instock",
        image:"images/wfd.jpeg",


        images: ["images/wfd.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/wfd.jpeg" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 71, 

    name:"Gold Lock Bracelet 2  ", 
        price: 119, 
         status: "⍟ Instock",
        image:"images/wedd.jpeg",


        images: ["images/wedd.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["5,7"],
        images2: ["images/wedd.jpeg" ],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 72, 

    name:"Collier A motifs doré", 
        price: 120, 
         status: "⍟ Instock",
        image:"images/wed.jpeg",


        images: ["images/wed.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/wed.jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 73, 

    name:" Gourmette riviere Argentée ", 
        price: 79, 
         status: "⍟ Instock",
        image:"images/widd.jpeg",


        images: ["images/widd.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/widd.jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 74, 

    name:"large charms hoops", 
        price: 59, 
         status: "⍟ Instock",
        image:"images/widdd.jpeg",


        images: ["images/widdd.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/widdd.jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 75, 

    name:"Gourmette chaine dorée", 
        price: 69, 
         status: "⍟ Instock",
        image:"images/wid.jpeg",


        images: ["images/wid.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/wid.jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 76, 

    name:"Bague dorée enchainnée", 
        price: 59, 
         status: "⍟ Instock",
        image:"images/z (1).jpeg",


        images: ["images/z (1).jpeg","images/z (4).jpeg", "images/z (5).jpeg" ],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustable"],
        images2: ["images/z (1).jpeg","images/z (4).jpeg", "images/z (5).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 77, 

    name:"Bracelet + bague Argentés", 
        price: 120, 
         status: "⍟ Instock",
        image:"images/z (2).jpeg",


        images: ["images/z (2).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Adjustables"],
        images2: ["images/z (2).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 78, 

    name:"bracelet  doré brillant", 
        price: 120, 
         status: "⍟ Instock",
        image:"images/z (3).jpeg",


        images: ["images/z (3).jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/z (3).jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 79, 

    name:" Bracelet Floral doré ", 
        price: 90, 
         status: "⍟ Instock",
        image:"images/z.jpeg",


        images: ["images/z.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/z.jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 80, 

    name:"Bracelet Honey Comb doré", 
        price: 90, 
         status: "⍟ Instock",
        image:"images/zt.jpeg",


        images: ["images/zt.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/zt.jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 81, 

    name:" Bague Marriage ovale doree ", 
        price: 59, 
         status: "⍟ Instock",
        image:"images/gem.jpeg",


        images: ["images/gem.jpeg", "images/wdd.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/gem.jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },
    { 
        id: 82, 

    name:"Bague Marriage double anneaux", 
        price: 59, 
         status: "⍟ Instock",
        image:"images/gemm.jpeg",


        images: ["images/gemm.jpeg", "images/wddd.jpeg"],
        description: "This striking, gold-toned Molten Metal bracelet features a series of textured starfish linked together to form a bold, wrap-around design with a polished, high-shine finish, making it a perfect statement accessory for summer or coastal-inspired looks ", 
        sizes: ["Taille unique"],
        images2: ["images/gemm.jpeg"],
        description2: " Cet article est fabriqué en acier inoxydable de haute qualité,Il aborde une finition dorée éclatante et élégante, Ce bijou est conçu pour résister au temps et ne ternit pas , Il est hypoallergénique et résiste parfaitement à l’eau au quotidien"
    },

];

async function seedDatabase() {
    try {
        await mongoose.connect('mongodb+srv://admin:yasmine@EliteCluster.xxxx.mongodb.net/EliteStore?retryWrites=true&w=majority');
        console.log("Connected!");

        // This deletes old products and inserts the new list in one go
        await Product.deleteMany({}); 
        await Product.insertMany(myProducts);

        console.log("Success! All products are now in the DB.");
        process.exit();
    } catch (err) {
        console.error("Error seeding:", err);
        process.exit(1);
    }
}

seedDatabase();
module.exports = products;

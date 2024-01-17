// Data types

// Primitive Types

//1 String

let userName = "Erica";
console.log(userName);

//number
let userID = 192043;
console.log(userID);

//boolean
let isEmployee = true;
console.log(isEmployee);

//undefined
let userSalary = undefined;
console.log(userSalary);

//null
let userNull = null;
console.log(userNull);

//Symbol
let id = Symbol("bloodGroup");
console.log(id);

// Non-Primitive (Reference) Types

//Array

let userRoles = [
  "SOC",
  "VM",
  null,
  undefined,
  { obj1: "value1", obj2: "value2" },
];
console.log(userRoles);

console.log(userRoles[userRoles.length - 1].obj1);

//object
const product = {
  productName: "Realme10Pro",
  productPrice: 171999,
};

console.log(product);
console.log(product.productPrice);

let productData1 = {
  productId: "P123456",
  name: "Smartphone X",
  brand: "TechCo",
  category: "Electronics",
  price: 599.99,
  inStock: true,
  specifications: {
    display: {
      type: "OLED",
      size: 6.2,
      resolution: "1080x2340",
    },
    camera: {
      main: "12 MP",
      front: "8 MP",
    },
    storage: {
      internal: "128 GB",
      external: "Expandable up to 256 GB",
    },
    features: ["Fingerprint Sensor", "Face Recognition", "Water-resistant"],
  },
  reviews: [
    { userId: "U123", rating: 4.5, comment: "Great phone! Fast and reliable." },
    {
      userId: "U456",
      rating: 3.8,
      comment: "Decent features, but battery life could be better.",
    },
  ],
  shippingInfo: {
    weight: "0.4 kg",
    dimensions: { length: 15, width: 8, height: 1.2 },
    deliveryOptions: ["Standard Shipping", "Express Shipping"],
  },
  sellerInfo: {
    sellerId: "S789",
    sellerName: "ElectroDeals",
    ratings: 4.7,
    contact: {
      email: "info@electrodeals.com",
      phone: "+1234567890",
    },
  },
};

console.log(productData1);
console.log(productData1.sellerInfo.contact.email);

//Incoreect Syntax
// let mobileData = {
//     [],
//     [],
// }

// Corect Syntax

let mobileData = {
  firstArray: ["A", 100],
  secondArray: [],
};

console.log(mobileData);

//Arrayof objects

let productArrayOfObjects = [
  {
    productId: "P789012",
    name: "PowerBook Pro",
    brand: "TechGear",
    category: "Electronics",
    price: 1299.99,
    inStock: true,
    specifications: {
      display: {
        type: "Retina",
        size: 13.3,
        resolution: "2560x1600",
      },
      processor: "Intel Core i7",
      memory: "16 GB RAM",
      storage: {
        type: "SSD",
        capacity: "512 GB",
      },
      features: ["Touch Bar", "Fingerprint Sensor", "Backlit Keyboard"],
    },
    reviews: [
      {
        userId: "U789",
        rating: 4.9,
        comment: "Excellent performance and build quality!",
      },
      {
        userId: "U101",
        rating: 4.5,
        comment: "Great for both work and entertainment.",
      },
    ],
    shippingInfo: {
      weight: "1.4 kg",
      dimensions: { length: 30, width: 21, height: 1.5 },
      deliveryOptions: ["Standard Shipping", "Express Shipping"],
    },
    sellerInfo: {
      sellerId: "S456",
      sellerName: "TechBazaar",
      ratings: 4.8,
      contact: {
        email: "support@techbazaar.com",
        phone: "+9876543210",
      },
    },
  },
  {
    productId: "P234567",
    name: "SpeedRun Pro",
    brand: "FitFeet",
    category: "Footwear",
    price: 79.99,
    inStock: true,
    specifications: {
      size: "US 10",
      color: "Blue/White",
      material: "Mesh and Synthetic",
      closure: "Lace-up",
      features: ["Cushioned Insole", "Breathable Design", "Shock Absorption"],
    },
    reviews: [
      {
        userId: "U345",
        rating: 4.7,
        comment: "Comfortable and stylish running shoes!",
      },
      {
        userId: "U567",
        rating: 4.2,
        comment: "Good for daily use and jogging.",
      },
    ],
    shippingInfo: {
      weight: "0.8 kg",
      dimensions: { length: 12, width: 8, height: 4 },
      deliveryOptions: ["Standard Shipping"],
    },
    sellerInfo: {
      sellerId: "S789",
      sellerName: "FootWonders",
      ratings: 4.5,
      contact: {
        email: "info@footwonders.com",
        phone: "+1234567890",
      },
    },
  },
];

console.log(productArrayOfObjects);
console.log(productArrayOfObjects[1].sellerInfo.ratings);

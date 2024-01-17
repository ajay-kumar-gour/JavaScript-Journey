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

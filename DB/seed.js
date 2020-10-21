const mongoose = require("./conn");
const Person = require("../models/person.js");

const Persons = [
  { name: "death trooper", age: 20, img: "" },
  { name: "shadow trooper", age: 20, img: "" },
  { name: "ranger trooper", age: 20, img: "" },
  { name: "inquisitor trooper", age: 20, img: "" },
];

Person.create(Persons, (err, data) => {
  console.log(data);
  mongoose.connection.close();
});
const { Schema, model } = require("mongoose");

//PERSON SCHEMA
const personSchema = new Schema(
  {
    name: String,
    age: number,
    img: String,
  },
  { timestamps: true }
);

//PERSON MODEL
const Person = model("person", personSchema);

//EXPORT MODEL
module.exports = Person;

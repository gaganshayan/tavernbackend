const Person = require("../models/person");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Person.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Person.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Person.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Person.findByIdAndRemove(req.params.id));
});

//seed route

router.get("/seed", (req, res) => {
  const Persons = [
    { name: "death trooper", age: 20 },
    { name: "shadow trooper", age: 20 },
    { name: "ranger trooper", age: 20 },
    { name: "inquisitor trooper", age: 20 },
  ];
})

// EXPORT ROUTER
module.exports = router;

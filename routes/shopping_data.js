const router = require("express").Router();
const ShoppingData = require("../model/Shopping_data");

router.get("/shoppingData", (req, res) => {
   ShoppingData.find({}, (err, data) => {
     if (err) res.sendStatus(400).send("Error");

     res.send(data);
   });
});

module.exports = router;

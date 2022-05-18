const router = require("express").Router();
const Cart = require("../model/Cart");

//place cart
router.post("/placecart", async (req, res) => {
    const cartItem = new Cart({
    id: req.body.id,
    email: req.body.email,
    productName: req.body.productName,
    ammount: req.body.ammount,
    productImg: req.body.productImg,
  });
  try {
    const savedcart = await cartItem.save();
    res.send("Cart added");
  } catch (err) {
    res.sendStatus(400).send(err);
  }
});

router.get("/viewcart/:emailid", (req, res) => {
  let query = {};
  let emailid = req.params.emailid;
  let skip = 0;
  let limit = 1000000000000000;
  if (req.query.skip && req.query.limit) {
    skip = Number(req.query.skip);
    limit = Number(req.query.limit);
  }
  query = { email: emailid };

  if (req.query.id) {
    query = {
      id: Number(req.query.id),
    };
  }
   Cart.find(query, (err, data) => {
    if (err) res.sendStatus(400).send("Error");

    res.send(data);
  });
});

//delete cart
// router.delete("/deletecart/", (req, res) => {
//   console.log(req.body);
//   db.collection("cart").remove(req.body, (err, result) => {
//     if (err) throw err;
//     res.send("Deleted successfully");
//   });
// });

module.exports = router;

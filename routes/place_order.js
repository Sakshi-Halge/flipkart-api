const router = require('express').Router();
const Order = require('../model/Orders');


router.post("/placeOrder",async (req, res) => {
  const orderItem = new Order({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    productName: req.body.productName,
    ammount: req.body.ammount,
    address: req.body.address,
    status: req.body.status,
    productImg: req.body.productImg,
    quantity: req.body.quantity,
  });
  try {
    const savedOrder = await orderItem.save();
    res.send(savedOrder);
  } catch (err) {
    res.sendStatus(400).send(err);
  }
});


//View orders

router.get("/viewOrders/:emailid", (req, res) => {
  let query = {};
  let emailid = req.params.emailid;
  let skip = 0;
  let limit = 1000000000000000;
  if (req.query.skip && req.query.limit) {
    skip = Number(req.query.skip);
    limit = Number(req.query.limit);
  }
  query = { email: emailid };

   Order.find(query, (err, data) => {
     if (err) res.sendStatus(400).send("Error");

     res.send(data);
   })
     .skip(skip)
     .limit(limit);
});


module.exports = router;
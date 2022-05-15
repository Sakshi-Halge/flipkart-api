const router = require("express").Router();
const ShoppingData = require("../model/Shopping_data");

router.get("/shoppingDatas", (req, res) => {
  let query = {};
  if (req.query.id) {
    query = { id: Number(req.query.id) };
  }
  ShoppingData.find( query , (err, data) => {
    if (err) res.sendStatus(400).send("Error");

    res.send(data);
  });
});


//Offer route
router.get("/shoppingData", (req, res) => {
  let sortKey = { price: 1 };

  let query = {};
  if (req.query.subId && req.query.sortKey) {
    let subId = Number(req.query.subId);
    sortkey = { price: Number(req.query.sortkey) };
    query = {
      sub_category_id: subId,
    };
  }
  if (req.query.loffer && req.query.hoffer) {
    let loffer = Number(req.query.loffer);
    let hoffer = Number(req.query.hoffer);

    query = {
      $and: [
        {
          offer: { $gte: loffer, $lte: hoffer },
        },
      ],
    };
  }
  if (req.query.lprice && req.query.hprice) {
    let lprice = Number(req.query.lprice);
    let hprice = Number(req.query.hprice);
    query = {
      $and: [
        {
          price: { $gte: lprice, $lte: hprice },
        },
      ],
    };
  }

  if (req.query.subId) {
    let subId = Number(req.query.subId);
    query = {
      sub_category_id: subId,
    };
  }
  if (req.query.subId && req.query.ldisc && req.query.hdisc) {
    let subId = Number(req.query.subId);
    let ldisc = Number(req.query.ldisc);
    let hdisc = Number(req.query.hdisc);
    query = {
      $and: [
        {
          offer: { $gte: ldisc, $lte: hdisc },
          sub_category_id: subId,
        },
      ],
      // sub_category_id: subId,
      // offer: Number(req.query.discount),
    };
  }
  if (req.query.subId && req.query.lprice && req.query.hprice) {
    let subId = Number(req.query.subId);
    let lprice = Number(req.query.lprice);
    let hprice = Number(req.query.hprice);
    query = {
      $and: [
        {
          price: { $gte: lprice, $lte: hprice },
          sub_category_id: subId,
        },
      ],
    };
  }

  ShoppingData.find(query).sort(sortKey).exec((err, data) => {
    if(err) res.sendStatus(400).send('Error');

    res.send(data);
  })
});

module.exports = router;

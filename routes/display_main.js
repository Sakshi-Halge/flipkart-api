const router = require('express').Router();
const main_category = require('../model/Main_cat')

router.get('/mainCategory', (req, res) => {
    main_category.find({ }, (err, data) => {
      if (err) res.sendStatus(400).send("Error");

      res.send(data);
    });
})

module.exports = router;
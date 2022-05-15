const router = require('express').Router();
const Sub_category = require('../model/Sub_cat');


router.get('/subCategory', (req, res) => {
    Sub_category.find({}, (err, data) => {
        if(err) res.sendStatus(400).send("Error");

        res.send(data)
    })
})


module.exports = router;
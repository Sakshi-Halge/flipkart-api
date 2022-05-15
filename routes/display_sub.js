const router = require('express').Router();
const Sub_category = require('../model/Sub_cat');


router.get('/subCategory/:mainCatId', (req, res) => {
    Sub_category.find({main_category_id : Number(req.params.mainCatId)}, (err, data) => {
        if(err) res.sendStatus(400).send("Error");

        res.send(data)
    })
})


module.exports = router;
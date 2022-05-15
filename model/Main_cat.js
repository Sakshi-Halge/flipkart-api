const mongoose = require('mongoose');

const Main_cat_data = new mongoose.Schema({
    main_cat_id : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required: true
    }
})


module.exports = mongoose.model("main_category", Main_cat_data);
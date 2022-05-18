const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port_number = process.env.PORT || 8754;
//Import routes
const main_cat_route = require('./routes/display_main');
const sub_cat_route = require('./routes/display_sub');
const shoppingData_route = require('./routes/shopping_data');
const orders_route = require('./routes/place_order');

dotenv.config();

//Connect to db
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () =>
  console.log("Connected to db!")
);

app.use(express.json());
app.use(express.urlencoded({extended : true}))

//Route Middleware
app.use('/api/data', main_cat_route);
app.use('/api/data', sub_cat_route);
app.use('/api/data', shoppingData_route);
app.use('/api/data', orders_route);


app.listen(port_number, (err) => {
  if (err) throw err;

  console.log(`Listening on http://localhost:${port_number}`);
});

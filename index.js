const express = require('express');
const app = express();
const port_number = process.env.PORT || 8754;


app.listen(port_number, (err) => {
    if(err) throw err;

    console.log(`Listening on http://localhost:${port_number}`);
})
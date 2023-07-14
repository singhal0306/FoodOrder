const port = 8000;
const express = require("express");
const db = require('./db');
const cors  = require('cors');
const Pizza = require('./models/pizzaModel')


const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.get("/getpizzas",  async(req, res) => {
    try {
        const menuItems = await Pizza.find();
        res.json(menuItems);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

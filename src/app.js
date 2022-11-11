const express = require('express');
const cors = require('cors');

const app = express();

app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cors());

app
    .get('/', (req, res) => {
        res.status(200).json({ message: 'Welcome to our Node server ' });
    })


app.listen(3000, () => {

    console.log('Node running on port 3000');
})
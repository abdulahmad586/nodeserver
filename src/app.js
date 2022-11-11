const express = require('express');
const cors = require('cors');

const app = express();

app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cors());

app
    .get('/', (req, res) => {
        res.status(200).json({ message: 'Welcome to our Node server ---> Ready for production, Speak spanish? try /hola. Orchestrator now on a public server waiting for a push' });
    })
    .get('/hola', (req, res) => {
        res.status(200).json({ message: 'Bienvenido a nuestro servidor de nodos ---> Listo para la producción' });
    })


app.listen(3000, () => {

    console.log('Node running on port 3000');
})
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const apiPort = process.env.PORT || 4000;
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
// const PORT = 4000;
const db = require('./db');
const calcRouter = require('./routes/calc-router');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send(`Let's Math!`)
});

app.use('/api', calcRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
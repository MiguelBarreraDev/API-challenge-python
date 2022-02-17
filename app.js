let data = require('./cards.js');
const cors = require('cors');
const express = require("express");
const app = express();

/* @Midelwers */
app.use(cors());
app.use(express.json());

/* @Routes */
app.get('/', (req, res) => {
	res.send("Hello World");
})

app.get('/cards', (req, res) => {
	res.json(data);
})

/* @Run */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server run on port ${PORT}`);
})

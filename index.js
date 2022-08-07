const express = require('express');
const app = express()
const db = require('./queries')
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
	console.log("hore");
	res.json({
		message: "hore"
	})
})

app.get('/table', db.createTables)

app.get('/komoditas', db.getKomoditas)
app.get('/komoditas/:id', db.getKomoditasById)
app.post('/komoditas', db.createKomoditas)
app.get('/umkm', db.getUmkm)
app.get('/umkm/:id', db.getUmkmById)

app.listen(process.env.PORT, () => {
	console.log("running on port 8080");
})
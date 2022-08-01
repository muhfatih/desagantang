const express = require('express');
const app = express()
const db = require('./queries')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/komoditas', db.getKomoditas)
app.get('/komoditas:id', db.getKomoditasById)
app.get('/umkm', db.getUmkm)
app.get('/umkm:id', db.getUmkmId)

app.listen(8080, () => {
	console.log("running on port 8080");
})
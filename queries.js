const Pool = require('pg').Pool

const createTables = (req, res) => {
	const pool = new Pool({
		user: process.env.USER,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: process.env.PORT,
	})
	pool.query('CREATE TABLE Komoditas(KomoditasID integer, Nama varchar(255), NamaIlmiah varchar(255), Deskripsi varchar(255), Foto varchar(255))', (err, res) => {
		if (err) {
			throw err
		}
	})
	pool.query('CREATE TABLE Umkm(UmkmID integer, Nama varchar(255), DeskripsiSingkat varchar(255), Foto varchar(255)', (err, res) => {
		if (err) {
			throw err
		}
	})
	// pool.query('CREATE TABLE Blog(BlogID integer, Nama text, NamaIlmiah text, Deskripsi text, Foto text', (err, res) => {
	// 	console.log(err);
	// })
	pool.end()
}

const createKomoditas = (req, res) => {
	const { id, nama, namaIlmiah, deskripsi, foto } = req.body
	const pool = new Pool({
		user: process.env.USER,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: 5432,
	})
	// console.log(id, nama, namaIlmiah, deskripsi, foto);
	pool.query('INSERT INTO Komoditas VALUES ($1,$2,$3,$4,$5)', [id, nama, namaIlmiah, deskripsi, foto], (err, results) => {
		if (err) {
			throw err
		}
		res.status(200).json(message = "successfuly created new komoditas")
		pool.end();
	})
}

const getKomoditas = (req, res) => {
	const pool = new Pool({
		user: process.env.USER,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: 5432,
	})
	pool.query('SELECT * FROM Komoditas ORDER BY KomoditasId ASC', (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).json(results.rows)
		pool.end();
	})
}

const getKomoditasById = (req, res) => {
	const id = parseInt(req.params.id)
	const pool = new Pool({
		user: process.env.USER,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: 5432,
	})
	pool.query('SELECT * FROM Komoditas WHERE KomoditasId = $1', [id], (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).json(results.rows)
		pool.end();
	})
}


const getUmkm = (req, res) => {
	const pool = new Pool({
		user: process.env.USER,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: 5432,
	})
	pool.query('SELECT * FROM umkm', (err, results) => {
		if (err) {
			throw err
		}
		res.status(200).json(results.rows)
		pool.end()
	})
}

const getUmkmById = (req, res) => {
	const id = parseInt(req.params.id)
	const pool = new Pool({
		user: process.env.USER,
		host: process.env.HOST,
		database: process.env.DATABASE,
		password: process.env.PASSWORD,
		port: 5432,
	})
	pool.query('SELECT * FROM umkm WHERE UmkmId = $1', [id], (err, results) => {
		if (err) {
			throw err
		}
		res.status(200).json(results.rows)
		pool.end()
	})
}

module.exports = {
	createTables,
	getKomoditas,
	getKomoditasById,
	createKomoditas,
	getUmkm,
	getUmkmById
}; 
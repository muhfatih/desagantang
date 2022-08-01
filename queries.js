const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'desagantang',
	password: 'Fatih1607',
	port: 5432,
})

const getKomoditas = (req, res) => {
	pool.query('SELECT * FROM komoditas ORDER BY KomoditasId ASC', (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).json(results.rows)
	})
}

const getKomoditasById = (req, res) => {
	const id = parseInt(req.params.id)
	pool.query('SELECT * FROM komoditas WHERE KomoditasId = $1', [id], (err, results) => {
		if (err) {
			throw err
		}
		res.status(200).json(results.rows)
	})
}

const getUmkmById = (req, res) => {
	const id = parseInt(req.params.id)
	pool.query('SELECT * FROM umkm WHERE UmkmId = $1', [id], (err, results) => {
		if (err) {
			throw err
		}
		res.status(200).json(results.rows)
	})
}

const getUmkm = (req, res) => {
	pool.query('SELECT * FROM umkm', (err, results) => {
		if (err) {
			throw err
		}
		res.status(200).json(results.rows)
	})
}

module.exports = {
	getKomoditas,
	getKomoditasById,
	getUmkm,
	getUmkmById
};
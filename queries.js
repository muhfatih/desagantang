const Pool = require('pg').Pool

const createTables = (req, res) => {
	const pool = new Pool({
		user: 'qduwpdhrtgrbkp',
		host: 'ec2-44-193-178-122.compute-1.amazonaws.com',
		database: 'desagantangd1d4uabd9b2oh3',
		password: '79b65bb95ec9b8e8a8633def37c42f48742fe5323b5b4a39ee7ff92d73167ad6',
		port: 5432,
	})
	pool.query('CREATE TABLE Komoditas(KomoditasID integer, Nama text, 	NamaIlmiah text, Deskripsi text, Foto text', (err, res) => {
		console.log(err);
	})
	pool.query('CREATE TABLE Umkm(UmkmID integer, Nama text, DeskripsiSingkat text, Foto text', (err, res) => {
		console.log(err);
	})
	// pool.query('CREATE TABLE Blog(BlogID integer, Nama text, NamaIlmiah text, Deskripsi text, Foto text', (err, res) => {
	// 	console.log(err);
	// })

}

const getKomoditas = (req, res) => {
	const pool = new Pool({
		user: 'qduwpdhrtgrbkp',
		host: 'ec2-44-193-178-122.compute-1.amazonaws.com',
		database: 'desagantangd1d4uabd9b2oh3',
		password: '79b65bb95ec9b8e8a8633def37c42f48742fe5323b5b4a39ee7ff92d73167ad6',
		port: 5432,
	})
	pool.query('SELECT * FROM komoditas ORDER BY KomoditasId ASC', (err, results) => {
		if (err) {
			throw err;
		}
		pool.end();
		res.status(200).json(results.rows)
	})
}

const getKomoditasById = (req, res) => {
	const id = parseInt(req.params.id)
	const pool = new Pool({
		user: 'qduwpdhrtgrbkp',
		host: 'ec2-44-193-178-122.compute-1.amazonaws.com',
		database: 'desagantangd1d4uabd9b2oh3',
		password: '79b65bb95ec9b8e8a8633def37c42f48742fe5323b5b4a39ee7ff92d73167ad6',
		port: 5432,
	})
	pool.query('SELECT * FROM komoditas WHERE KomoditasId = $1', [id], (err, results) => {
		if (err) {
			throw err;
		}
		res.status(200).json(results.rows)
		pool.end();
	})
}


const getUmkm = (req, res) => {
	const pool = new Pool({
		user: 'qduwpdhrtgrbkp',
		host: 'ec2-44-193-178-122.compute-1.amazonaws.com',
		database: 'desagantangd1d4uabd9b2oh3',
		password: '79b65bb95ec9b8e8a8633def37c42f48742fe5323b5b4a39ee7ff92d73167ad6',
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
		user: 'qduwpdhrtgrbkp',
		host: 'ec2-44-193-178-122.compute-1.amazonaws.com',
		database: 'desagantangd1d4uabd9b2oh3',
		password: '79b65bb95ec9b8e8a8633def37c42f48742fe5323b5b4a39ee7ff92d73167ad6',
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
	getKomoditas,
	getKomoditasById,
	getUmkm,
	getUmkmById
};
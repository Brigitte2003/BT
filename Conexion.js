const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors'); // Agrega esta línea

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'catalogo_productos',
    password: '22062000',
    port: 5433,
});

app.use(cors()); // Habilita CORS

app.use(bodyParser.json());

app.post('/comprar', async (req, res) => {
    try {
        const { nombre, marca, modelo, precio } = req.body;
        const query = 'INSERT INTO productos_comprados (nombre_producto, marca, modelo, precio) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [nombre, marca, modelo, precio];
        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al procesar la compra');
    }
});

app.get('/productos-comprados', async (req, res) => {
    try {
        const query = 'SELECT * FROM productos_comprados';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos comprados');
    }
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

const express = require('express');
const mysql = require('mysql'); // Usar mysql2 con soporte de promesas
const bodyParser = require('body-parser'); // Middleware para analizar req.body
const app = express();
const port = 3000;

// Middleware para manejar JSON en solicitudes
app.use(express.json());

(async () => {
    try {
        // Configuración de conexión a la base de datos
        const db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Yes',
            database: 'C1',
            database: 'F1',
            database: 'V1' 
        });

        console.log('Conexión a la base de datos exitosa');

        // Endpoint para obtener las computadoras
        app.get('/computadoras', async (req, res) => {
            try {
                const [results] = await db.query('SELECT * FROM cafeinternet_stock');
                res.json(results);
            } catch (err) {
                console.error('Error al obtener computadoras:', err);
                res.status(500).send('Error al obtener computadoras');
            }
        });

        // Endpoint para iniciar una sesión de usuario
        app.post('/iniciar-sesion', async (req, res) => {
            try {
                const { producto_id, cantidad } = req.body;

                // Verificar si el producto existe y tiene stock suficiente
                const [stock] = await db.query('SELECT cantidad FROM cafeinternet_stock WHERE id = ?', [producto_id]);
                if (!stock.length || stock[0].cantidad < cantidad) {
                    return res.status(400).send('Stock insuficiente');
                }

                // Registrar la venta
                const queryVenta = 'INSERT INTO cafeinternet_sales (producto_id, cantidad) VALUES (?, ?)';
                await db.query(queryVenta, [producto_id, cantidad]);

                // Actualizar el stock
                const queryUpdateStock = 'UPDATE cafeinternet_stock SET cantidad = cantidad - ? WHERE id = ?';
                await db.query(queryUpdateStock, [cantidad, producto_id]);

                res.send('Sesión iniciada con éxito');
            } catch (err) {
                console.error('Error al iniciar sesión:', err);
                res.status(500).send('Error al iniciar sesión');
            }
        });

        // Endpoint para agregar una nueva computadora
        app.post('/computadoras', async (req, res) => {
            try {
                const { seccion, producto, cantidad } = req.body;
                const query = 'INSERT INTO cafeinternet_stock (seccion, producto, cantidad) VALUES (?, ?, ?)';
                await db.query(query, [seccion, producto, cantidad]);
                res.send('Computadora agregada con éxito');
            } catch (err) {
                console.error('Error al agregar computadora:', err);
                res.status(500).send('Error al agregar computadora');
            }
        });

        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
})();

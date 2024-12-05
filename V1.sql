CREATE DATABASE IF NOT EXISTS verduleria_db;
USE verduleria_db;

CREATE TABLE  IF NOT EXISTS verduleria_stock (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    familia VARCHAR(50) NOT NULL,
    origen VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    precio_uni DECIMAL(10, 2) NOT NULL,
    precio_kg DECIMAL(10, 2) NOT NULL,
    cantidad INT
)ENGINE=INNODB;

CREATE TABLE  IF NOT EXISTS verduleria_sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    cantidad INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES verduleria_stock(id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=INNODB;

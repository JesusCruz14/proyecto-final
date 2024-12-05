CREATE DATABASE IF NOT EXISTS ferreteria_db;
USE ferreteria_db;

CREATE TABLE  IF NOT EXISTS ferreteria_stock (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    familia VARCHAR(50) NOT NULL,
    departamento VARCHAR(50) NOT NULL,
    tamaño VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    cantidad INT
)ENGINE=INNODB;

CREATE TABLE  IF NOT EXISTS ferreteria_sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    cantidad INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES ferreteria_stock(id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=INNODB;

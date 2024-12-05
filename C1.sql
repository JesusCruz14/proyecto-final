CREATE DATABASE IF NOT EXISTS cafeinternet_db;
USE cafeinternet_db;

CREATE TABLE  IF NOT EXISTS cafeinternet_stock (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seccion VARCHAR(50),
    producto VARCHAR(50),
    cantidad INT
)ENGINE=INNODB;

CREATE TABLE  IF NOT EXISTS cafeinternet_sales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    cantidad INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES cafeinternet_stock(id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=INNODB;

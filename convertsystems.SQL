CREATE DATABASE convertsystems
GO

USE convertsystems
GO

CREATE TABLE categoria
(
    id_categoria INT PRIMARY KEY IDENTITY,
    tipo_categoria NVARCHAR(70) NOT NULL-- 'ESCRITORIO', 'MOVIL', 'CONSOLA', ETC.
)
GO

CREATE TABLE productos
(
    id_producto INT PRIMARY KEY IDENTITY,
    id_categoria INT FOREIGN KEY REFERENCES categoria(id_categoria) NOT NULL,
    tipo NVARCHAR(60) NOT NULL DEFAULT 'GRATIS',-- 'GRATIS', 'VENTAS'
    nombre_producto NVARCHAR(50) NOT NULL,
    descripcion_producto NVARCHAR(MAX),-- UNA DESCRIPCION DETALLADA DEL PRODUCTO
    precio_producto DECIMAL(10,2) NOT NULL CHECK (precio_producto >= 0),-- PRECIO DEL PRODUCTO
    valoracion DECIMAL(3,2) CHECK (valoracion BETWEEN 0 AND 5),-- VALORACION EN ESTRELLAS DE LAS PERSONAS QUE RECOMIENDAN EL PRODUCTO (0-5) ESTRELLAS
    oferta NVARCHAR(50) NOT NULL CHECK (oferta IN ('ACTIVO', 'INACTIVO')),-- PARA SAVER SI EL PRODUCTO SE ENCUENTRA EN OFERTA O NO
    estado NVARCHAR(50) NOT NULL CHECK (estado IN ('EN VENTA', 'PROXIMAMENTE')),-- PARA VER SI EL PRODUCTO YA ESTA LANZADO O AUN NO MEJOR DICHO SI EL PRODUCTO YA ESTA EN VENTA O NO
    fecha_lanzamiento DATE,-- FECHA DE LANZAMIENTO DEL PRODUCTO
    producto VARBINARY(MAX)-- EL ARCHIVO DEL PRODUCTO COMPRIMIDO EN: (ZIP, RAR, 7z, ETC)
)
GO

CREATE TABLE ofertas
(
    id_oferta INT PRIMARY KEY IDENTITY,
    id_producto INT FOREIGN KEY REFERENCES productos(id_producto) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    descuento INT NOT NULL CHECK (descuento >= 0 AND descuento <= 100)
)
GO

SELECT*FROM sys.tables
GO

INSERT INTO categoria
    (tipo_categoria)
VALUES
    ('ESCRITORIO'),
    ('MOVIL'),
    ('CONSOLA');
GO

SELECT * FROM categoria
GO

INSERT INTO productos
    (id_categoria, tipo, nombre_producto, descripcion_producto, precio_producto, valoracion, oferta, estado, fecha_lanzamiento, producto)
VALUES
    (1, 'VENTAS', 'Producto A', 'Descripción detallada del producto A', 49.99, 4.5, 'ACTIVO', 'EN VENTA', '2023-06-01', 0x),
    (2, 'GRATIS', 'Producto B', 'Descripción detallada del producto B', 0.00, 3.8, 'INACTIVO', 'PROXIMAMENTE', '2023-09-01', 0x),
    (3, 'VENTAS', 'Producto C', 'Descripción detallada del producto C', 29.99, 4.0, 'ACTIVO', 'EN VENTA', '2024-01-15', 0x);
GO

SELECT * FROM productos
GO

INSERT INTO ofertas
    (id_producto, fecha_inicio, fecha_fin, descuento)
VALUES
    (1, '2024-06-01', '2024-06-10', 20),
    (2, '2024-07-01', '2024-07-15', 50),
    (3, '2024-08-01', '2024-08-05', 10);
GO

SELECT * FROM ofertas
GO
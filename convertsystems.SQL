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
    tipo NVARCHAR(60) NOT NULL,-- 'GRATIS', 'VENTAS'
    nombre_producto NVARCHAR(50) NOT NULL,
    descripcion_producto NVARCHAR(100),-- UNA DESCRIPCION DETALLADA DEL PRODUCTO
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

CREATE TABLE historial
(
    id_historial INT PRIMARY KEY IDENTITY,
    id_producto INT FOREIGN KEY REFERENCES productos(id_producto) NOT NULL,-- Relación con productos
    accion NVARCHAR(50) NOT NULL,-- Acción realizada (e.g., 'COMPRA', 'DEVOLUCION')
    fecha_accion DATETIME NOT NULL,-- Fecha y hora de la acción
    descripcion NVARCHAR(200)-- Descripción adicional de la acción
);
GO

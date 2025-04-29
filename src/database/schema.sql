CREATE DATABASE cosmeticos;

\c cosmeticos

CREATE TABLE marcas (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL
);

SELECT * FROM marcas;

CREATE TABLE cosmeticos (
    id SERIAL PRIMARY KEY,
    type VARCHAR(200) NOT NULL,
    price VARCHAR (30) NOT NULL,
    amount VARCHAR (50) NOT NULL,
    marca_id INTEGER REFERENCES marcas(id) ON DELETE CASCADE
);

ALTER TABLE cosmeticos ADD COLUMN photo TEXT;

SELECT * FROM cosmeticos;

INSERT INTO marcas (name) VALUES
('Wella'),
('Lola Cosmetics'),
('Creamy'),
('Kiko Milano');

INSERT INTO cosmeticos (type, price, amount, marca_id) VALUES
('Kit Wella Professionals Invigo Nutri-Enrich', 'R$382,00', '1 Litro', 1),
('Lola Óleo Argan Oil', 'R$14,99', '10ml', 2),
('Creme Hidratante Facial Creamy', 'R$47,98', '40g', 3),
('Base Full Coverage 2 In 1 Kiko Milano', 'R$139,90', '50ml', 4);
-- Active: 1689598087354@@127.0.0.1@5432@restaurant

-- adding table recipe --

CREATE TABLE
    recipe (
        id SERIAL PRIMARY KEY,
        image VARCHAR(255),
        title VARCHAR(255) NOT NULL,
        ingredients TEXT,
        category VARCHAR(20)
    );

ALTER TABLE recipe
ADD
    COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

SELECT * FROM recipe;

INSERT INTO
    recipe (title, ingredients, category)
VALUES (
        'Nasi goreng',
        'Nasi, Sambal, Krupuk',
        'Makanan'
    ), (
        'Bakso Bakar',
        'Bakso, Cabai, Micin',
        'Makanan'
    ), (
        'Mie Ayam Special',
        'Mie, Ayam, Sayur-sayur, Bakso, Keju',
        'Makanan'
    ), (
        'Susu Soda',
        'Susu Bendera, Soda, Strauberry',
        'Minuman'
    );

DROP TABLE recipe;
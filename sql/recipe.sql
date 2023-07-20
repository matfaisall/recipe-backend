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
    recipe (
        photo,
        title,
        ingredients,
        category_id
    )
VALUES (
        'https://placehold.co/600x400',
        'Nasi goreng',
        'Nasi, Sambal, Krupuk',
        1
    ), (
        'https://placehold.co/600x400',
        'Bakso Bakar',
        'Bakso, Cabai, Micin',
        2
    ), (
        'https://placehold.co/600x400',
        'Mie Ayam Special',
        'Mie, Ayam, Sayur-sayur, Bakso, Keju',
        2
    ), (
        'https://placehold.co/600x400',
        'Susu Soda',
        'Susu Bendera, Soda, Strauberry',
        3
    ), (
        'https://placehold.co/600x400',
        'Susu Sapi',
        'Susu Bendera, Soda, Strauberry',
        1
    ), (
        'https://placehold.co/600x400',
        'Susu Kambing',
        'Susu Bendera, Soda, Strauberry',
        3
    ), (
        'https://placehold.co/600x400',
        'Susu Kudaa',
        'Susu Bendera, Soda, Strauberry',
        1
    ), (
        'https://placehold.co/600x400',
        'Susu Bendera',
        'Susu Bendera, Soda, Strauberry',
        2
    ), (
        'https://placehold.co/600x400',
        'Susu Kental Manis',
        'Susu Bendera, Soda, Strauberry',
        3
    ), (
        'https://placehold.co/600x400',
        'Susu Kopi',
        'Susu Bendera, Soda, Strauberry',
        1
    ), (
        'https://placehold.co/600x400',
        'Susu Teh',
        'Susu Bendera, Soda, Strauberry',
        3
    ), (
        'https://placehold.co/600x400',
        'Susu Zee',
        'Susu Bendera, Soda, Strauberry',
        2
    );

DROP TABLE recipe;

SELECT
    recipe.id,
    recipe.title,
    recipe.ingredients,
    recipe.photo,
    category.name AS category
FROM recipe
    JOIN category ON recipe.category_id = category.id
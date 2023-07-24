-- Active: 1689598087354@@127.0.0.1@5432@restaurant

-- adding table recipe --

CREATE TABLE
    recipe (
        id SERIAL PRIMARY KEY,
        image VARCHAR(255),
        title VARCHAR(255) NOT NULL,
        ingredients TEXT,
        category_id INT,
        users_id INT NOT NULL
    );

ALTER TABLE recipe ADD COLUMN user_id INT;

ALTER TABLE recipe
ADD
    COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- membuat koneksi dari recipe ke tabel user --

ALTER TABLE recipe ALTER COLUMN user_id SET NOT NULL;

ALTER TABLE recipe ADD FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE recipe
ADD
    FOREIGN KEY (category_id) REFERENCES category(id);

SELECT * FROM recipe;

TRUNCATE TABLE recipe;

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
    JOIN category ON recipe.category_id = category.id;

SELECT
    recipe.id,
    recipe.photo,
    recipe.title,
    recipe.ingredients,
    category.name AS category
FROM recipe
    JOIN category ON recipe.category_id = category_id
WHERE recipe.title ILIKE '%su%';

SELECT
    recipe.id,
    recipe.photo,
    recipe.title,
    recipe.ingredients,
    category.name AS category
FROM recipe
    JOIN category ON recipe.category_id = category_id
WHERE recipe.title ILIKE '%su%'
OFFSET 10
LIMIT 5;

SELECT
    recipe.id,
    recipe.title,
    recipe.ingredients,
    recipe.photo,
    category.name AS category
FROM recipe
    JOIN category ON recipe.category_id = category.id
ORDER BY title asc
OFFSET 1
LIMIT 10;

SELECT COUNT(*)
FROM recipe
    JOIN category ON recipe.category_id = category.id;
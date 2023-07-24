-- Active: 1689598087354@@127.0.0.1@5432@restaurant@public

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );

ALTER TABLE users
ADD
    COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE users ADD COLUMN photo VARCHAR(255);

INSERT INTO
    users (name, email, password)
VALUES (
        'admin',
        'admin@gmail.com',
        '123456'
    ), (
        'guest',
        'guest@gmail.com',
        '123456'
    );

SELECT * FROM users;

TRUNCATE TABLE users;
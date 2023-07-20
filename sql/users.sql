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
    COLUMN created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;

SELECT * FROM users;

TRUNCATE TABLE users;
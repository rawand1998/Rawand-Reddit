BEGIN;
DROP TABLE IF EXISTS users,post,comment CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    password VARCHAR(100),
       email VARCHAR(100) unique
);
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500),
    discription VARCHAR(500),
    user_id INT REFERENCES users(id)
    
);
CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    content VARCHAR(100),
    -- post_id INTEGER REFERENCES post(id), 
    user_id INTEGER REFERENCES users(id)
);


COMMIT;
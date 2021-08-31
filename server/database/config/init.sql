BEGIN;
DROP TABLE IF EXISTS users,post,comment;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    password VARCHAR(100),
       email VARCHAR(100)
);
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    discription VARCHAR(500),
    user_id INT REFERENCES users(id),
     image TEXT
);
CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    content VARCHAR(100),
    post_id INTEGER REFERENCES post(id)  
);
INSERT INTO users (name,password,email) VALUES ('RAWANDHOSAM','159','RAAND@gmail.com');
INSERT INTO post(title,discription,user_id,image) VALUES ('RAWAND','ONJHGVFCGHBJ',1,'hhh');

COMMIT;
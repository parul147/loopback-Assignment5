CREATE TABLE customer(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    website VARCHAR(20),
    address VARCHAR(50),

);

CREATE TABLE users(
     id SERIAL PRIMARY KEY,
     customer_id VARCHAR ,
     firstname VARCHAR(30),
     middlename VARCHAR(30), 
     lastname VARCHAR(30),
     email VARCHAR(20),
     phonenumber  VARCHAR(14),
     role VARCHAR(10),
     address  VARCHAR(30)
);

ALTER TABLE users ADD COLUMN role_id VARCHAR;

CREATE TABLE role(
    id VARCHAR PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(50)
);
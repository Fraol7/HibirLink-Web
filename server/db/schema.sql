CREATE TYPE gender_type AS ENUM ('male', 'female', 'other');
CREATE TYPE category_enum AS ENUM ('electronics', 'health', 'industry', 'fashion', 'grocery', 'maintenance');
CREATE TYPE language_type AS ENUM('Amharic', 'English');
CREATE TYPE payment_type AS ENUM('Cash', 'Bank');

CREATE TABLE Users (
     id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Profiles (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    gender gender_type,
    country VARCHAR(255),
    phone_number VARCHAR(20),
    language language_type,
    additional_email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Products (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    category category_enum NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    address VARCHAR(255),
    contact_number VARCHAR(20)
);

CREATE TABLE CartItems (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

CREATE TABLE BillingAddresses (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    recipient_name VARCHAR(255),
    street_address VARCHAR(255) NOT NULL,
    apartment_floor VARCHAR(255),
    town_city VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    payment_method payment_type NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

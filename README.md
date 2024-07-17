# Guideline to run the backend server.
make sure to "npm install" every package first


--> first as we are not having a remote server for our database, we are going to use our machine (localhost) as a database. so makesure to install postgres database on your machine or pc.

# steps. 
once your are sure you have installed postgres on your machine check if it is there by runnig 'psql' on the cmd terminal. 
if everything is ok. 

## Script for setting up the database:
Create a file named setup-db.sh with the following content:

```
#!/bin/bash

# Variables
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=hibirlink

# Create database
PGPASSWORD=$DB_PASSWORD psql -U $DB_USER -c "CREATE DATABASE $DB_NAME;"

# Run schema file
PGPASSWORD=$DB_PASSWORD psql -U $DB_USER -d $DB_NAME -f ./server/db/schema.sql

```

Make the script executable and run it:

```
chmod +x setup-db.sh
./setup-db.sh

```

## Manual set up

Alternatively, you can run the schema file manually:

```
psql -U your_db_user -d your_db_name -f ./server/db/schema.sql

```

## Start the server

```
npm start 

```
## API endpoints

check ./server/Hibirlink.postman_collection.json for API documentation

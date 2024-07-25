// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// This will load the .env file and set the environment variables to the process.env object.
require('dotenv').config(); 

let sequelize;
// If the application is deployed, it will use the DB_URL environment variable. If not, it will use the local environment variables from the .env file.
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}

// Export the connection
module.exports = sequelize;
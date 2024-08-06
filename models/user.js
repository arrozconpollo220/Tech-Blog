// Purpose: To create a user model for the database.
const { Model } = require('sequelize');

// Import the connection to the database
const sequelize = require('../config/connection');

// Create a new Sequelize model for the User table
class User extends Model {}

// Define the columns in the User table
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User; // Export the User model
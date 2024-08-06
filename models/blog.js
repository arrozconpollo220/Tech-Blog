// Purpose: Create a Sequelize model for the Blog table in the database
const { Model, DataTypes } = require('sequelize');
// Import the connection to the database
const sequelize = require('../config/connection');

// Create a new Sequelize model for the Blog table
class Blog extends Model {}

// Define the columns in the Blog table
Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desscription: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog'
    } );

module.exports = Blog;  // Export the Blog model
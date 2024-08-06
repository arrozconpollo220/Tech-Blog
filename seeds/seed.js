const sequelize = require('../config/connection');  // Import the connection object
const { User, Blog, Comment } = require('../models');  // Import the User and Post models

const userData = require('./userData.json');  // Import the user seed data
const blogData = require('./blogData.json');  // Import the blog seed data
const commentData = require('./commentData.json');  // Import the comment seed data

const seedDatabase = async () => {
    await sequelize.sync({ force: true });  // Sync the models to the database and drop any existing tables

    const users = await User.bulkCreate(userData, {  // Create the users
        individualHooks: true,
        returning: true,
    });

    for (const blog of blogData) {  // Loop through the blog data
        const newBlog =
        await Blog.create({  // Create a blog post
            ...blog,
            user_id: users[Math.floor(Math.random() * users.length)].id,  // Assign a random user_id
        });
    }

    const comments = await Comment.bulkCreate(commentData, {      // Create the comments
    individualHooks: true,
    returning: true,
});

    process.exit(0);  // Exit the process

};

seedDatabase();  // Call the seedDatabase function


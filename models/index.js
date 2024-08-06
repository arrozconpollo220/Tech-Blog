// Purpose: Index file for models folder.
const User = require('./user');
const Blog = require('./blog'); 
const Comment = require('./comment');

// associations between User and Blog
User.hasMany(Blog, {
    foreignKey: 'user_id'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

// associations between Blog and Comment
Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
}); 

Comment.belongsTo(User, {  
    foreignKey: 'blog_id'
});

// associations between User and Comment
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment }; // Export the User, Blog, and Comment models

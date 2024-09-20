const fetchUsers = require('./user/fetchUsers');
const fetchUser = require('./user/fetchUser');
const fetchBlog = require('./blog/fetchBlog');
const fetchBlogs = require('./blog/fetchBlogs');


module.exports = [
    fetchUsers,
    fetchUser,
    fetchBlog,
    fetchBlogs
];
const fetchUser = require('./fetchUser');
const fetchUsers = require('./fetchUsers');
const fetchBlog = require('./fetchBlog');
const fetchBlogs = require('./fetchBlogs');

const queries = {
  Query: {
    ...fetchUser.Query,
    ...fetchUsers.Query,
    ...fetchBlog.Query,
    ...fetchBlogs.Query,
  },
};

module.exports = queries;
const { Blog } = require('../../../models');

const fetchBlogs = {
  Query: {
    async blogs() {
        return await Blog.findAll({
          include: ['user'],
        });
      },
    },
    Blog: {
        user(blog) {
          return blog.getUser();
        },
    },
};

module.exports = fetchBlogs
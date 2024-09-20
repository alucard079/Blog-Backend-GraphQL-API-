const { Blog } = require('../../../models');

const fetchBlog = {
  Query: {
    async blog(_, { id }) {
      return await Blog.findByPk(id, {
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

module.exports = fetchBlog
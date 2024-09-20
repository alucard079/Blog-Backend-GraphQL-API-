const { Blog } = require('../../models');

const blogResolvers = {
  Query: {
    async blogs() {
      return await Blog.findAll({
        include: ['user'],
      });
    },
  },
  Mutation: {
    async createBlog(_, { title, content, userId }) {
      return await Blog.create({ title, content, userId });
    },
  },
  Blog: {
    user(blog) {
      return blog.getUser();
    },
  },
};

module.exports = blogResolvers;
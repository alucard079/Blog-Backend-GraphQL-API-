const { Blog, User } = require('../../../models');

const createBlog = {
  Mutation: {
    async createBlog(_, { title, content, userId }) {
      // Check if the user exists
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Create the blog entry with the associated userId
      const blog = await Blog.create({ title, content, userId });

      // Return the created blog along with the associated user
      return {
        ...blog.toJSON(),
        user,  // Attach the user to the returned blog object
      };
    },
  },
};

module.exports = createBlog;

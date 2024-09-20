const { User, Blog } = require('../../../models');

const fetchUser = {
  Query: {
    async user(_, { id }) {
      return await User.findByPk(id, {
        include: [
          {
            model: Blog,
            as: 'blogs',
          },
        ],
      });
    },
  },
  User: {
    blogs(user) {
      return user.getBlogs(); // This should work since the association is now properly defined
    },
  },
};

module.exports = fetchUser
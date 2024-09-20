const { User, Blog } = require('../../../models');

const fetchUsers = {
  Query: {
    async users() {
      return await User.findAll({
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

module.exports = fetchUsers;
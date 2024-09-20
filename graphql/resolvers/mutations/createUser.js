const { User } = require('../../../models');

const createUser = {
  Mutation: {
    async createUser(_, { name, email }) {
      return await User.create({ name, email });
    },
  },
};

module.exports = createUser;

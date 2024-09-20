const createUser = require('./createUser');
const createBlog = require('./createBlog');

const mutations = {
  Mutation: {
    ...createUser.Mutation,
    ...createBlog.Mutation,
  },
};

module.exports = mutations;
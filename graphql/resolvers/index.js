const blogResolvers = require('./blog');
const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
  Query: {
    ...queries.Query,
    ...blogResolvers.Query,
  },
  Mutation: {
    ...mutations.Mutation,
  },
};

module.exports = resolvers;

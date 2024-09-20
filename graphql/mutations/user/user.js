const { gql } = require('apollo-server-express');

const userMutation = gql`
  extend type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

module.exports = userMutation;
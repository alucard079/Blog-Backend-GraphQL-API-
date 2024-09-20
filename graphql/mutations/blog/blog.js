const { gql } = require('apollo-server-express');

const blogMutation = gql`
  extend type Mutation {
    createBlog(title: String!, content: String!, userId: ID!): Blog
  }
`;

module.exports = blogMutation;
const { gql } = require('apollo-server-express');

const blogType = gql`
  type Blog {
    id: ID!
    title: String!
    content: String!
    user: User!
  }
`;

module.exports = blogType;
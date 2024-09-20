const { gql } = require('apollo-server-express');

const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    blogs: [Blog]
  }
`;

module.exports = userType;
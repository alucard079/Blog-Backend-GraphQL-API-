const { gql } = require('apollo-server-express');

const fetchUsers = gql`
  extend type Query {
    users: [User]
  }
`;

module.exports = fetchUsers;
const { gql } = require('apollo-server-express');

const fetchBlog = gql`
  extend type Query {
    blog(id: ID!): Blog
  }
`;

module.exports = fetchBlog;
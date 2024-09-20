const { gql } = require('apollo-server-express');

const fetchBlogs = gql`
  extend type Query {
    blogs: [Blog]
  }
`;

module.exports = fetchBlogs;
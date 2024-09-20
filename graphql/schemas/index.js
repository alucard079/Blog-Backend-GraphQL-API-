const { gql } = require('apollo-server-express');
const types = require('../types');
const queries = require('../queries');
const mutations = require('../mutations');

const rootType = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

module.exports = [
  gql`${rootType}`,
  ...types,
  ...queries,
  ...mutations,
];

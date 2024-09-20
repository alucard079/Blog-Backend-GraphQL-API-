const {gql} = require('apollo-server-express');

const fetchUser = gql`
    extend type Query {
        user(id: ID!): User
    }
`; 

module.exports = fetchUser;

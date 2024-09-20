const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('../graphql/schemas');
const resolvers = require('../graphql/resolvers');

const app = express();
app.use(cors());

async function startApolloServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: {
      settings: {
        'schema.polling.enable': false,
      },
    },
  });

  // Start the Apollo Server before applying middleware
  await apolloServer.start();

  // Apply middleware after starting the server
  apolloServer.applyMiddleware({ app, path: '/api' });

  const server = createServer(app);
  return server;
}

module.exports = startApolloServer;

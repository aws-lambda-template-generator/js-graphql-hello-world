const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./src/schema');
const { resolvers } = require('./src/resolvers');

mocks = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

import { ApolloServer } from 'apollo-server-lambda';

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const lambdaServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

module.exports = { lambdaServer };

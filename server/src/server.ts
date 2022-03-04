import { ApolloServer } from 'apollo-server';
import { resolvers } from 'documents/graphql/resolvers';
import typeDefs from "documents/graphql/queries";


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
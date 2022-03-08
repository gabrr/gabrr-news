import { ApolloServer } from 'apollo-server';
import { resolvers } from 'documents/graphql/resolvers';
import { typeDefs } from 'documents/graphql/queries';

//Config
import { config } from 'dotenv';

config()

export const serverConfig: ApolloServer['apolloConfig'] = {
	typeDefs,
	resolvers,
	cors: {
		origin: '*',
	}
}

export default (server: ApolloServer) => {
	server.listen().then(({ url }) => {
		console.log(`🚀  Server ready at ${url}`);
	})
}
import { userResolvers } from 'documents/graphql/subjects/user/userResolvers';
import { postResolvers } from 'documents/graphql/subjects/post/postResolvers';

export const resolvers = {
  Query: {
		...userResolvers.query,
		...postResolvers.query,
  },
	Mutation: {
		...userResolvers.mutation,
		...postResolvers.mutation,
	}
};
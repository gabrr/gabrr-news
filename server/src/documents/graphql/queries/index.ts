import { gql } from "apollo-server";
import Post from "documents/graphql/subjects/post/post.graphql";
import User from "documents/graphql/subjects/user/user.graphql";

export const typeDefs = gql`
	${Post}
	${User}

	type Query {
		posts: [Post]
		users: [User]
	}

	type Mutation {
		deletePost(id: Int) : [Post]
		deleteUser(id: Int) : [User]
	}
`
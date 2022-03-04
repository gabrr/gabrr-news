import { database } from "mock";

export const postResolvers = {
	query: {
		posts: () => database.posts
	},
	
	mutation: {
		deletePost: (_: any, { id }: any) => {
			return database.posts.splice(id)
		},
	}
}
import { database } from "mock";

export const userResolvers = {
	query: {
		users: () => {
			console.log("called")
			return database.users
		}
	},

	mutation: {
		deleteUser: (_: any, { id }: any) => {
			return database.users.splice(id)
		},
	}
}
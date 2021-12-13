import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../controller/resolvers";

const typeDefs = /* GraphQL */ `
	type Query {
		tasks: [TaskResult]
		task(id: ID!): TaskResult
	}

	union TaskResult = Task | Error

	type Error {
		message: String
		code: Int
	}
	type Task {
		id: ID
		title: String
		description: String
	}

	type Mutation {
		createTask(task: TaskInput!): TaskResult
		deleteTask(id: ID!): TaskResult
		updateTask(id: ID!, newTask: TaskInput!): TaskResult
	}
	input TaskInput {
		title: String
		description: String
	}
`;

export default makeExecutableSchema({
	typeDefs,
	resolvers,
});

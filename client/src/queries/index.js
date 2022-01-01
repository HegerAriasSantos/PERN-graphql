import { gql } from "@apollo/client";

export const getAllTasks = gql`
	{
		tasks {
			__typename
			... on Error {
				message
				code
			}
			... on Task {
				id
				title
				description
			}
		}
	}
`;

export const getTask = gql`
	query Task($id: ID!) {
		task(id: $id) {
			__typename
			... on Error {
				message
				code
			}
			... on Task {
				id
				title
				description
			}
		}
	}
`;

export const createTask = gql`
	mutation CreateTask($title: String!, $description: String!) {
		createTask(task: { title: $title, description: $description }) {
			__typename
			... on Error {
				message
				code
			}
			... on Task {
				id
				title
				description
			}
		}
	}
`;

export const updateTask = (id, title, description) => gql`
	mutation {
		updateTask(
			id: ${id}
			newTask: { title: ${title}, description: ${description} }
		) {
			__typename
			... on Error {
				message
				code
			}
			... on Task {
				id
				title
				description
			}
		}
	}
`;

export const deleteTask = gql`
	mutation DeleteTask($id: ID!) {
		deleteTask(id: $id) {
			__typename
			... on Error {
				message
				code
			}
			... on Task {
				id
				title
				description
			}
		}
	}
`;

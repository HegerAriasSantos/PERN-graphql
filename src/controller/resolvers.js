import pool from "../db/Connect";
import {
	addTypeNameArr,
	addTypeNameSingle,
	handleError,
} from "./../utils/index";

export const resolvers = {
	Query: {
		tasks: async () => {
			try {
				const allTasks = await pool.query("SELECT * FROM task");
				if (allTasks.rows[0]) return addTypeNameArr(allTasks.rows, "Task");
				throw new Error();
			} catch (error) {
				return [
					handleError("There aren't Tasks in the database", 404, "Error"),
				];
			}
		},
		task: async (_, { id }) => {
			try {
				const task = await pool.query("SELECT * FROM task WHERE Id = $1", [id]);

				if (task.rows[0]) return addTypeNameSingle(task.rows[0], "Task");
				throw new Error();
			} catch (error) {
				return handleError(
					"Not found the task, please make sure you're using the correct id",
					404,
					"Error",
				);
			}
		},
	},
	Mutation: {
		createTask: async (_, { task }) => {
			try {
				const createdTask = await pool.query(
					"INSERT INTO task (title, description) VALUES ($1,$2) RETURNING *",
					[task.title, task.description],
				);
				if (createdTask.rows[0])
					return addTypeNameSingle(createdTask.rows[0], "Task");
				throw new Error();
			} catch (error) {
				return handleError(
					"we couldn't create the task, please make sure you're creating a new task and not repeating one",
					500,
					"Error",
				);
			}
		},
		deleteTask: async (_, { id }) => {
			try {
				const deletedTask = await pool.query(
					"DELETE FROM task WHERE Id=$1 RETURNING *",
					[id],
				);
				if (deletedTask.rows[0])
					return addTypeNameSingle(deletedTask.rows[0], "Task");
				throw new Error();
			} catch (error) {
				return handleError(
					"we couldn't create the task, please make sure you're creating a new task and not repeating one",
					500,
					"Error",
				);
			}
		},
		updateTask: async (_, { id, newTask }) => {
			try {
				const newTaskResult = await pool.query(
					"UPDATE task SET title= $1, description= $2 WHERE Id= $3 RETURNING *",
					[newTask.title, newTask.description, id],
				);
				if (newTaskResult.rows[0])
					return addTypeNameSingle(newTaskResult.rows[0], "Task");
				throw new Error();
			} catch (error) {
				return handleError(
					"we couldn't update the task, please make sure you're using the correct id",
					500,
					"Error",
				);
			}
		},
	},
};

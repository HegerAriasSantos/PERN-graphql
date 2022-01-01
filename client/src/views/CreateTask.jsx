import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/client";
import { getTask } from "../queries";

const CreateTask = () => {
	const [task, setTask] = useState({
		title: "",
		description: "",
	});
	const [Loading, setLoading] = useState(false);
	const [editing, setEditing] = useState(false);
	const navigate = useNavigate();
	const params = useParams();
	const [GetTask, { loading, data, error }] = useLazyQuery(getTask);

	
	useEffect(() => {
		if (params.id) {
			GetTask({ variables: { id: params.id } });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.id]);

	setInterval(() => {
		console.log(loading, data);
		setTask({
			title: data?.task.title,
			description: data?.task.description,
		});
		console.log(task);
	}, 500);

	// const LoadTask = id => {
	// 	// loading === true ?? LoadTask(id);
	// 	if (data.task) {
	// 		console.log("There are data");
	// 	}
	// 	setTask({ title: data.title, description: data.description });
	// 	console.log(task);
	// 	setEditing(true);
	// };

	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);
		try {
			if (editing) {
			} else {
			}

			setLoading(false);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	if (loading) return <p> "Loading..."</p>;
	if (error) return <p> `Error! ${error.message}`</p>;

	return (
		<div className='bg-gray-800 w-[400px] h-[400px] mt-[92px] '>
			{task.title}
		</div>
	);
};

export default CreateTask;

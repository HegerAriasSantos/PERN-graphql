import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksList from "../views/TasksList";
import TaskForm from "../views/CreateTask";
import Menu from "../components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<div className='bg-gray-900 flex justify-center items-center  min-h-screen max-h-fit  relative order-1'>
				<Routes>
					<Route index path='/' element={<TasksList />} />
					<Route path='/tasks/new' element={<TaskForm />} />
					<Route path='/tasks/:id/edit' element={<TaskForm />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;


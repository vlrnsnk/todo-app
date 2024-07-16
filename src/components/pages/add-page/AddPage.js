import Header from '../../header/Header';
import AddTaskForm from "../../add-task-form/AddTaskForm";

function AddPage({ onAddTask }) {
  return (
    <>
      <Header text="Add Task" isGoBack={true} />
      <AddTaskForm onAddTask={onAddTask} />
    </>
  );
}

export default AddPage;

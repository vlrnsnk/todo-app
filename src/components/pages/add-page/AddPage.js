import Header from '../../header/Header';
import AddTaskForm from "../../add-task-form/AddTaskForm";

function AddPage() {
  return (
    <>
      <Header text="Add Task" isGoBack={true} />
      <AddTaskForm />
    </>
  );
}

export default AddPage;

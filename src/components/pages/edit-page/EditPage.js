import { useParams } from "react-router-dom";

import todoList from '../../../mocks/todo-list';

import Header from "../../header/Header";
import EditTaskForm from "../../edit-task-form/EditTaskForm";

function EditPage() {
  const { id } = useParams();
  
  const currentTask = todoList.filter((todoItem) => todoItem.id === Number(id));

  const { title, detail } = currentTask[0];

  return (
    <>
      <Header text="Edit Task" isGoBack={true}/>
      <EditTaskForm
        title={title}
        detail={detail}
      />
    </>
  );
}

export default EditPage;

import { useParams } from "react-router-dom";

import Header from "../../header/Header";
import EditTaskForm from "../../edit-task-form/EditTaskForm";

function EditPage({ todoList }) {
  const { id } = useParams();

  const currentTask = todoList.filter((todoItem) => todoItem.id === Number(id));
  const { title, detail } = currentTask[0];

  return (
    <>
      <Header text="Edit Task" isGoBack={true}/>
      <EditTaskForm
        id={id}
        title={title}
        detail={detail}
      />
    </>
  );
}

export default EditPage;

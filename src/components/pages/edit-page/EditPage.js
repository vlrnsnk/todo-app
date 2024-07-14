import Header from "../../header/Header";
import EditTaskForm from "../../edit-task-form/EditTaskForm";

function EditPage({ title, detail }) {
  return (
    <>
      <Header text="Edit Task" isGoBack={true}/>
      <EditTaskForm
        title="Test edit title"
        detail="Test edit detail"
      />
    </>
  );
}

export default EditPage;

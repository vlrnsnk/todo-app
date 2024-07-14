import EditTaskForm from "../../edit-task-form/EditTaskForm";

function EditPage({ title, detail }) {
  return (
    <EditTaskForm
      title="Test edit title"
      detail="Test edit detail"
    />
  );
}

export default EditPage;

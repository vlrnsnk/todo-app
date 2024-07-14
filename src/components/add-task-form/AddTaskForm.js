import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import TaskTitleFormGroup from '../form-groups/task-title/TaskTitle';
import TaskDetailFormGroup from '../form-groups/task-detail/TaskDetail';

function AddTaskForm() {
  return (
    <Form className="w-75 w-sm-50">
      <TaskTitleFormGroup />
      <TaskDetailFormGroup />
      <Button className="w-100" size="lg" variant="success" type="submit">Add</Button>
    </Form>
  );
}

export default AddTaskForm;

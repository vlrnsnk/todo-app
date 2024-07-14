import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import TaskTitleFormGroup from '../form-groups/task-title/TaskTitle';
import TaskDetailFormGroup from '../form-groups/task-detail/TaskDetail';

function EditTaskForm({ title, detail }) {
  return (
    <Form className="w-75 w-sm-50">
      <TaskTitleFormGroup title={title} />
      <TaskDetailFormGroup detail={detail} />
      <div className='d-flex justify-content-between'>
        <Button className="w-25" size="lg" variant="outline-primary" type="submit">Update</Button>
        <Button className="w-25" size="lg" variant="outline-primary" type="submit">Cancel</Button>
      </div>
    </Form>
  );
}

export default EditTaskForm;

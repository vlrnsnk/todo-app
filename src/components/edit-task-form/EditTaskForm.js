import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import TaskTitleFormGroup from '../form-groups/task-title/TaskTitle';
import TaskDetailFormGroup from '../form-groups/task-detail/TaskDetail';

function EditTaskForm({ title, detail }) {
  const navigate = useNavigate();

  return (
    <Form className="w-75 w-sm-50">
      <TaskTitleFormGroup title={title} />
      <TaskDetailFormGroup detail={detail} />
      <div className='d-flex flex-column flex-sm-row gap-3 justify-content-between'>
        <Button
          className="w-100 w-sm-25"
          size="lg"
          variant="success"
          type="submit"
        >
          Update
        </Button>
        <Button
          className="w-100 w-sm-25"
          size="lg"
          variant="danger"
          type="submit"
          onClick={() => navigate("/")}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
}

export default EditTaskForm;

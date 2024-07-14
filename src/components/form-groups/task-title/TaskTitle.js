import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

function TaskTitleFormGroup({ title }) {
  return (
    <FormGroup className="mb-3 mb-sm-4" controlId="formTaskTitle">
      <FormLabel>Task title</FormLabel>
      <FormControl type="text" placeholder="Title" required size="lg" value={title} />
    </FormGroup>
  );
}

export default TaskTitleFormGroup;

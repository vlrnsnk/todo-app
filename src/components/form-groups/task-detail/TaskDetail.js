import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

function TaskDetailFormGroup({ detail, handleChange, isDisabled }) {
  return (
    <FormGroup className="mb-3 mb-sm-4" controlId="formTaskDetail">
      <FormLabel>Task detail</FormLabel>
      <FormControl
        type="text"
        placeholder={detail ? '' : 'Detail'}
        size="lg"
        value={detail}
        onChange={handleChange}
        disabled={isDisabled}
      />
    </FormGroup>
  );
}

export default TaskDetailFormGroup;

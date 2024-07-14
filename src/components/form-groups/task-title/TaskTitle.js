import { useState } from 'react';

import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

function TaskTitleFormGroup({ title }) {
  const [taskTitle, setTaskTitle] = useState(title ?? '');

  return (
    <FormGroup className="mb-3 mb-sm-4" controlId="formTaskTitle">
      <FormLabel>Task title</FormLabel>
      <FormControl
        type="text"
        placeholder={title ? '' : 'Title'}
        required
        size="lg"
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
      />
    </FormGroup>
  );
}

export default TaskTitleFormGroup;

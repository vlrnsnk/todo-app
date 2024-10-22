// import { useState } from 'react';

import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

function TaskTitleFormGroup({ title, handleChange, isDisabled }) {
  return (
    <FormGroup className="mb-3 mb-sm-4" controlId="formTaskTitle">
      <FormLabel>Task title</FormLabel>
      <FormControl
        type="text"
        placeholder={title ? '' : 'Title'}
        required
        size="lg"
        value={title}
        onChange={handleChange}
        disabled={isDisabled}
      />
    </FormGroup>
  );
}

export default TaskTitleFormGroup;

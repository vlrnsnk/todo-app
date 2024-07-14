import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function EditTaskForm({ title, detail }) {
  return (
    <Form className="w-75 w-sm-50">
      <FormGroup className="mb-3 mb-sm-4" controlId="formTaskTitle">
        <FormLabel>Task title</FormLabel>
        <FormControl type="text" placeholder="Title" required size="lg" value={title}></FormControl>
      </FormGroup>
      <FormGroup className="mb-3 mb-sm-4" controlId="formTaskDetail">
        <FormLabel>Task detail</FormLabel>
        <FormControl type="text" placeholder="Detail" size="lg" value={detail}></FormControl>
      </FormGroup>
      <div className='d-flex justify-content-between'>
        <Button className="w-25" size="lg" variant="outline-primary" type="submit">Update</Button>
        <Button className="w-25" size="lg" variant="outline-primary" type="submit">Cancel</Button>
      </div>
    </Form>
  );
}

export default EditTaskForm;

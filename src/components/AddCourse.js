import React from "react";
import { useState } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";

function AddCourse() {
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  return (
    <>
      <div className="p-4 box">
        <Form>
          <Form.Group className="mb-3" controlId="formCourseTitle">
            <InputGroup>
              <InputGroup.Text id="formCourseTitle">Course</InputGroup.Text>
              <Form.Control type="text" placeholder="Course Name" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCourseTrainer">
            <InputGroup>
              <InputGroup.Text id="formCourseTrainer">Trainer</InputGroup.Text>
              <Form.Control type="text" placeholder="Course Trainer" />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button  variant="success">
              Available
            </Button>
            <Button variant="danger" >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddCourse;

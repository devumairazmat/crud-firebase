import React from "react";
import { useState } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import CourseDataService from "../services/course.services"

function AddCourse() {
  const [name, setName] = useState("");
  const [trainer, setTrainer] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({error:false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || trainer === "") {
      setMessage({error:true, msg: "Please fill all the fields" });
      return;
    }
    const newCourse = {
      name,
      trainer,
      status
    };
    console.log(newCourse);
    try {
     await CourseDataService.addCourses(newCourse);
     setMessage({error:false, msg: "Course added successfully" });
    }
    catch (error) {
      setMessage({error:true, msg: "Error adding course" });
    }
    setName("");
    setTrainer("");
  }

  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formCourseTitle">
            <InputGroup>
              <InputGroup.Text id="formCourseTitle">Course</InputGroup.Text>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Course Name"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCourseTrainer">
            <InputGroup>
              <InputGroup.Text id="formCourseTrainer">Trainer</InputGroup.Text>
              <Form.Control
                value={trainer}
                onChange={(e) => setTrainer(e.target.value)}
                type="text"
                placeholder="Course Trainer"
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
          <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
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

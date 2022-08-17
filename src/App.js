import { Container, Navbar, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";
import { useState } from "react";

function App() {
  const [nameId, setNameId] = useState("");

  const getNameIdHandler = (id) => {
    console.log("Course Id to be edited: ", id);
    setNameId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddCourse id={nameId} setNameId={setNameId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <CourseList getNameId={getNameIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

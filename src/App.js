import { Container, Navbar, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";

function App() {
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
            <AddCourse />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <CourseList  />
          </Col>
        </Row>
      </Container>
  </>
  );
}

export default App;

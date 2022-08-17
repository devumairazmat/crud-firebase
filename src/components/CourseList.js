import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import CourseDataService from "../services/course.services";

function CourseList({ getNameId }) {
  const [name, setName] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const data = await CourseDataService.getAllCourses();
    console.log(data.docs);
    setName(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await CourseDataService.deleteCourse(id);
    getCourses();
  };

  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getCourses}>
          Refresh List
        </Button>
      </div>
      {/* <pre>{JSON.stringify(name, undefined, 2)}</pre> */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Trainer Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {name.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.trainer}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="m-1  edit"
                    onClick={(e) => getNameId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="m-1  delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default CourseList;

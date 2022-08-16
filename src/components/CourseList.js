import React from "react";
import { useState } from "react";
import { Table, Button } from "react-bootstrap";


function CourseList() {
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit">Refresh List</Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
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
              <tr>
                <td>1</td>
                <td>Moile App Dev</td>
                <td>Uzair</td>
                <td>Available</td>
                <td>
                  <Button variant="secondary" className="edit">
                    Edit
                  </Button>
                  <Button variant="danger" className="delete">
                    Delete
                  </Button>
                </td>
              </tr>
        </tbody>
      </Table>
    </>
  );
}

export default CourseList;

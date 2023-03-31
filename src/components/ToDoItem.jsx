import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";

function ToDoItem({ toDo, toggleCompleted }) {
  return (
    <tr key={toDo.id} className="mb-4">
      <td width={"84%"}>
        {toDo.complete ? (
          <strike>{toDo.task}</strike>
        ) : (
          <span>{toDo.task}</span>
        )}
      </td>
      <td className="d-flex justify-content-end">
        <Button variant="success" className="ms-4">
          <Form.Check.Input
            isValid
            value={toDo.id}
            checked={toDo.complete}
            onChange={toggleCompleted}
          />
        </Button>
        <Button variant="warning" className="mx-2">
          <FaEdit style={{ color: "white" }} />
        </Button>
        <Button variant="danger" className="me-4">
          <FaTrash />
        </Button>
      </td>
    </tr>
  );
}

export default ToDoItem;

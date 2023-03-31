import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toDoList from "../data/data.json";

function ToDoInput() {
  const navigate = useNavigate();

  const [task, setTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const toDoListLength = toDoList.length;
    toDoList.push({
      id: toDoListLength + 1,
      task,
    });

    return navigate("/todo-search");
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">
        <b>TodoInput</b>
      </h2>
      {/* diluar perlu Row Col ga ya? */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmit} action="/todoList">
                <InputGroup className="mb-3" controlId="task">
                  <InputGroup.Text id="basic-addon1">
                    <FaBook /> {/* icon */}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Input/Edit Todo"
                    aria-label="input-edit"
                    aria-describedby="basic-addon2"
                    required={true}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  {toDoList.length < 1 && (
                    <Form.Text className="text-muted">
                      Enter your task.
                    </Form.Text>
                  )}
                </InputGroup>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ToDoInput;

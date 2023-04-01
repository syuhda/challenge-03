import React, { useEffect, useMemo, useState } from "react";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import toDoList from "../data/data.json";

function ToDoEdit() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [task, setTask] = useState("");

  const id = searchParams.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    const old = toDoList.filter((t) => t.id == id);
    setTask(old[0].task);
  }, [id]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!id) {
      return alert("tidak ada id");
    }

    const newTodo = toDoList.map((t) => {
      if (t.id == id) {
        t.task = task;
      }

      return t;
    });

    toDoList = [...newTodo];

    return navigate("/todo-search");
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">
        <b>TodoEdit</b>
      </h2>
      {/* diluar perlu Row Col ga ya? */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Form onSubmit={onSubmit} action="/todoList">
                <InputGroup className="mb-3">
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

export default ToDoEdit;

import React from "react";
import { Container } from "react-bootstrap";
import ToDoSearch from "./ToDoSearch";

function Home() {
  return (
    <Container className="mt-2">
      <ToDoSearch />
    </Container>
  );
}

export default Home;

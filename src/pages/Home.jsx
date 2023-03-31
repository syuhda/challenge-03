import React from "react";
import { Container } from "react-bootstrap";
import Search from "../components/Search";
import ToDoSearch from "./ToDoSearch";

function Home() {
  return (
    <Container className="mt-2">
      <Search/>
      <ToDoSearch />
    </Container>
  );
}

export default Home;

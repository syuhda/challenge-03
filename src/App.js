import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoSearch from "./pages/ToDoSearch";
import ToDoInput from "./pages/ToDoInput";
import Home from "./pages/Home";
import ToDoEdit from "./pages/ToDoEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-search" element={<ToDoSearch />} />
        <Route path="/todo-input" element={<ToDoInput />} />
        <Route path="/todo-edit" element={<ToDoEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

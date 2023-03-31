import React, { useState } from "react";
import toDoList from "../data/data.json";

function Search() {
  const [search, setSearch] = useState("");

  const items = toDoList?.filter((data) => {
    return data.task;
  });
  console.log(items);
}

export default Search;

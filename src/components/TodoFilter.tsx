import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setFilter } from "../store/todoSlice";

const filters: ("all" | "completed" | "incomplete")[] = [
  "all",
  "completed",
  "incomplete",
];

const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.filter);

  const handleFilterChange = (filter: "all" | "completed" | "incomplete") => {
    dispatch(setFilter(filter));
  };

  return (
    <ButtonGroup>
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={currentFilter === filter ? "contained" : "outlined"}
          onClick={() => handleFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default TodoFilter;

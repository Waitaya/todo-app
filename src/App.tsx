import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { addTodo, toggleTodo, deleteTodo } from "./store/todoSlice";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./types";
import TodoFilter from "./components/TodoFilter";

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo: Todo) => {
    dispatch(addTodo(todo));
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Todo List
        </Typography>
        <TodoForm onSubmit={handleAddTodo} />

        <TodoFilter />
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </Box>
    </Container>
  );
};

export default App;

import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../types";

interface TodoFormProps {
  onSubmit: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    };
    onSubmit(newTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Box textAlign="right" mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Add Todo
        </Button>
      </Box>
    </form>
  );
};

export default TodoForm;

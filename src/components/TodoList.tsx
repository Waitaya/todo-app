import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";
import { Todo } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ onToggle, onDelete }) => {
  const todos = useSelector((state: RootState) => {
    if (state.filter === "completed") {
      return state.todos.filter((todo) => todo.completed);
    } else if (state.filter === "incomplete") {
      return state.todos.filter((todo) => !todo.completed);
    } else {
      return state.todos;
    }
  });

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default TodoList;

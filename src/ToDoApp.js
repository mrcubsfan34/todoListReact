import React, { useEffect } from "react";
import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function ToDoApp() {
  const initialTodos = [{ id: 1, task: "Pet a Monkey", completed: false}]
  const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);
 

  return (
    <Paper style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#18f2eb",
    }}
      elevation={0}
    > 
      <AppBar color="secondary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos With Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid 
        container 
        justify="center" 
        style={{ marginTop: "1rem" }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList 
            todos={todos} 
            removeTodo={removeTodo} 
            toggleTodo={toggleTodo} 
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ToDoApp;
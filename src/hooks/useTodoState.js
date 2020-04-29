import useLocalStorageState from "./useLocalStorageState";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos, 
    addTodo: newTodoText => {
      setTodos([...todos, {id: uuid(), task: newTodoText, completed: false} ]);
    }, 
    removeTodo: todoId => {
      // we'll filter out removed todos
      const updateTodos =  todos.filter(todo => todo.id !== todoId);
      // call new setTodos with todos array
      setTodos(updateTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => 
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo => 
        todo.id === todoId ? {...todo, task: newTask} : todo
      );
      setTodos(updatedTodos);
    },
  }
}





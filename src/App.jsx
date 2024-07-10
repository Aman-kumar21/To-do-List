import { useState,useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(["dff"]);
  const [todoValue, setTodoValue] = useState("");
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    });
    persistData(newTodoList)
    setTodos(newTodoList);

  }
  function handleEditTodo(index){
    const valueToBeDeleted= todos[index];
    setTodoValue(valueToBeDeleted);
    handleDeleteTodo(index);
  }
  useEffect(()=>{
    if(!localStorage){
      return;
    }
      let localTodos=localStorage.getItem('todos')
      if(!localTodos){
        return
      }
          localTodos= JSON.parse(localTodos).todos
          setTodos(localTodos)

  },[]);
  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue}  handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </main>
  );
}

export default App;

import React from "react";
import TodoCard from "./TodoCard";
 
export default function TodoList(props) {
  //create an array
  const {todos }= props;
  
  return (
    <ul className="main">
      {todos.map((todo,  todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

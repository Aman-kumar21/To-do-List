import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index,handleEditTodo} = props;
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <button onClick={()=>{handleEditTodo(index)}}>
          <IoCreateOutline />
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </li>
  );
}

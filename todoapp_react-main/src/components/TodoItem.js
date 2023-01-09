import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";

//her "todo" yani arraya atanan her bir objem için TodoItem component ' imi oluşturdum. 
function TodoItem(props) {
   
   
    return (
        
            <div className={props.todoitem.completed ? "todo-row completed" : "todo-row"} >
                <li className="todo-item"> {props.todoitem.text } </li>
                <div className="icon">
                    <RiCloseCircleLine className="icon-1" onClick={() => props.removeEtf(props.todoitem.id)}/>
                    <BiCheckCircle className="icon-1" onClick={() => props.completeTodof(props.todoitem.id)}/>
                    
                </div>
                


                
            </div>
       
    );
        
}

export default TodoItem;
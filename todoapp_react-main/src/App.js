import React, {useState, useEffect} from "react";
import "./style.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";


function App() {

  const [input, setInput] = useState("");  

  const [todos, setTodos] = useState([]); 

  const [status, setStatus] = useState("all");
  const [filteredTodos,setfilteredTodos] = useState([]);  

 

  useEffect( () => {
    localStorage.setItem("liste",JSON.stringify(todos))
  } , [todos]) ;
  

  const liste = JSON.parse(localStorage.getItem("liste"))


  useEffect(() => { filteredHandler(todos)}, [todos,status]) 
  //todos ya da 
 
console.log("status" , status);
  const filteredHandler = () => {  
    switch(status) {
      case "completed":
      setfilteredTodos(todos.filter((todo) => {
        return todo.completed === true})); 
      break;
      case "uncompleted":
      setfilteredTodos(todos.filter((todo) => todo.completed === false));
      break;
      default:
        setfilteredTodos(todos);
        break;  
    }
  }

  const addTodo = (text) => {
    let id=1;
    if(todos.length > 0) { 
      id= todos[0].id +1;
      console.log("id :" + id);
    }
    let todo = {id:id , text:text ,completed:false};  
    let newTodos=[todo,...todos]; 
    
    
    console.log(newTodos);
    setTodos(newTodos);
  }

  
    console.log(todos);
  const removeTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id)  
    
    console.log(todos);
    setTodos(updatedTodos);
  }
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) { 
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos);  
  };
  
  
  return ( 
    <div className="todo-app">
      <h1>My Todo List 
        <h2>{input}</h2>  
      </h1>
      <TodoForm addToDof={addTodo} input={input} setInput={setInput} setStatus={setStatus}/>
      
      {
      filteredTodos.map((todo) => {   
        return(
          <TodoItem filteredTodos = {filteredTodos}  removeEtf = {removeTodo} completeTodof={completeTodo} todoitem = {todo} key={todo.id} />
        )
      }
      )}
  
      
     
               
    </div>
  );
}
 

export default App;

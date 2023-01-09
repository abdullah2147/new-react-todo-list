import React, { useState } from "react";
//onChange'e bir arrow function atıyoruz
//Submit'e tıkladığında handleSubmit fonksiyonu çalışssın
function TodoForm(props) {  //ör:addtodof İ PROPS İLE çağırmak yerine ({addtodof }) şeklinde de kullanabilirsin.
    
  //input ve Setınput 'lar app js sayfasından geleceği için hepsini props.input ve props.setInput olarak değiştirdim.

  const handleSubmit = (e) => {
    e.preventDefault();
    //ve Submit olayı gerçekleştiğinde setInput 'u tekrardan boşaltması gerekir.
    props.addToDof(props.input);
    props.setInput("");
    

  }
  return ( //value={input} eklememin sebebi form onSubmit edildiğinde setInput ile içeriği boş yapacak , bunun değerini input'un value su ile eşitlemem lazım.
    //onClick={handleSubmit} yerine form'a onSubmit={handleSubmit'de diyebilirsin. Buton'a click, form'a submit verilir.}
    <form  className="todo-form" >
      <div className="formgiris">
        <input
        value={props.input}
        onChange={(event) => {
          props.setInput(event.target.value) //onchange 'e atanan fonksiyonu ayrı bir yerde const olarakta tanımlayabilirdin. Biz arrow function şeklinde yazmayı tercih ettik.
        }}
        className="todo-input"
        placeholder="Add a to do"
        ></input>
        <button type="submit" className="todo-button" onClick={handleSubmit}>Add To Do</button> 
      </div>

      <div className="select">
                <select name="todos" className="filter-todo" onChange={(e) => {props.setStatus(e.target.value)}}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
      </div>
      
    </form>
  );
}

export default TodoForm;

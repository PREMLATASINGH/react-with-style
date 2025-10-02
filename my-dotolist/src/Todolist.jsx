import React, { useState } from 'react';
function Todolist(){
    const[task,setTask]=useState("");
    const[tasklist,setTasklist]=useState([]);
    function handleChange(event){
        setTask(event.target.value);
    };
  return (<>
  <h1>To Do List</h1>
  <div>
    <input type='text' placeholder='enter the task'value={setTask} onChange={handleChange}/>
    <button>add</button>
  </div>
  
  </>

  );
}

export default Todolist;
import React, { useState } from 'react'
import axios from 'axios'
function create() {
    const [task,setTask]=useState()
    const handleAdd=() =>{
        axios.post('http://localhost:500/add',{task: task})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
  return (
    <div className="create-form">
        <input type="text" name="" id="" placeholder='Enter task' onChange={() => setTask(e.target.value)}/>
        <button type='button' onClick={handleAdd}>Add</button>
      
    </div>
  )
}

export default create

import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import React, { useState } from "react";

function App(props) {

  function addTask(name) {
    alert(name);
  }

  const taskList = props.tasks?.map((task) => (
    <Todo
     id={task.id} 
     name={task.name}
      completed={task.completed} 
      key={task.id}
      />
  ));

  return (
    <div className='todoapp stack-large'>
      <h1>Day of Small Things List</h1>
      <Form addTask={addTask}/>
      <div className='filters btn-group stack-exception'>
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>
      <h2 id='list-heading'>3 tasks remaining</h2>
      <ul
        role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'>
          {taskList}
      </ul>
    </div>    
  );
}

export default App;

// Instead of this, we have taskList:
// <Todo name='eat' completed={true} id='todo-0'/>
// <Todo name='sleep' completed={false} id='todo-1'/>
// <Todo name='repeat' completed={false} id='todo-2'/>

import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import React, { useState } from "react";
import { nanoid } from 'nanoid';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {

    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks[0]);
  }

  function deleteTask(id) {

    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
    console.log(id);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList)
  }


  // 1. the function that listens created here
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
     id={task.id} 
     name={task.name}
      completed={task.completed} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length != 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`

  return (
    <div className='todoapp stack-large'>
      <h1>Task List</h1>
      <Form addTaskProp={addTask}/> 
      {/* 2. This is where we create the prop for form */}
      <div className='filters btn-group stack-exception'>
        {filterList}
      </div>
      <h2 id='list-heading'>{headingText}</h2>
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

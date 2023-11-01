import React, { useState } from 'react'

function Form(props) {

    // set initial name value as "use hooks"
    // function used to modify name is setName()
    // useState returns these two things, use array destructuring to capture them in separate variables
    const [name, setName] = useState("");

    function handleChange(element) {
        setName(element.target.value);
    }

    function handleSubmit(element) {
        element.preventDefault();
        props.addTaskProp(name);
        // 3. we use the same form prop within itself
        setName("");
    }

  return (
    <form onSubmit={handleSubmit}>
    <h2 className='label-wrapper'>
      <label htmlFor='new-todo-input' className='label__lg'>
        What needs to be done?
      </label>
    </h2>
    <input
      type='text'
      id='new-todo-input'
      className='input input__lg'
      name='text'
      autoComplete='off'
      value={name}
      onChange={handleChange}
    />
    <button type='submit' className='btn btn__primary btn__lg'>
      Add
    </button>
  </form>
  )
}

export default Form

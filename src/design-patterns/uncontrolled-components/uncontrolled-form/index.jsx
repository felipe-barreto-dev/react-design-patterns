import React, { createRef } from "react";

const UncontrolledForm = ({ onSubmit }) => {

  const nameInput = createRef();
  const ageInput = createRef();
  const hairColorInput = createRef();

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit()
  }

  return <form onSubmit={handleSubmit}>
    <input ref={nameInput} type="text" name="name" />
    <input ref={ageInput} type="text" name="age" />
    <input ref={hairColorInput} type="text" name="hairColor" />
    <input type="submit" value="enviar" />
  </form>
}

export default UncontrolledForm
import React, { useEffect, useState } from "react";

const ControlledForm = () => {

  const [name, setName] = useState()
  const [nameError, setNameError] = useState()

  useEffect(() => {

    if (name.length < 2) {
      setNameError('O nome deve ter mais de 2 caracteres')
    } else {
      setNameError('')
    }

  }, [name])

  return <form>
    <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" />
    <span>{nameError}</span>
    <button>enviar</button>
  </form>
}

export default ControlledForm
import React, { useState } from 'react';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const App = () => {
  const [name, setName] = useState('João');
  const [lastName, setLastName] = useState('Silva');
  const [age, setAge] = useState(10);

  const handleNameInput = (event: InputChangeEvent) => {
    setName( event.target.value );
  }
  const handleLastNameInput = (event: InputChangeEvent) => {
    setLastName( event.target.value );
  }
  const handleAgeInput = (event: InputChangeEvent) => {
    setAge( parseInt(event.target.value) );
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleNameInput} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handleLastNameInput} />
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={handleAgeInput} />
      </div>

      <hr/>

      Olá {`${name} ${lastName}`}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;
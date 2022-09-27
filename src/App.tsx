import { useState } from "react";

const App = () => {
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [age, setAge] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLast = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLast(e.target.value);
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleChange} />
      </div>

      <div>
        Sobrenome: 
        <input type="text" value={last} onChange={handleLast}/>
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={handleAge}/>
      </div>

      <hr/>

      Olá {name} {last}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;
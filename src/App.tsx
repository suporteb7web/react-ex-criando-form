import React, { useState } from "react";

const App = () => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [age, setAge] = useState('');

	return (
		<div>
			<div>
				Nome:
				<input 
					type="text" 
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
					value={name} 
				/>
			</div>
			<div>
				Sobrenome:
				<input 
					type="text" 
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)} 
					value={surname} 
				/>
			</div>
			<div>
				Idade:
				<input 
					type="text" 
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
					value={age}
				/>
			</div>
			
			<hr />

			Olá {name} {surname}, tudo bem?<br />
			Você tem {age} anos.
		</div>
	);
}

export default App;
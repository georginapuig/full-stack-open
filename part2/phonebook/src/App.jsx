import { useState } from 'react';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    setPersons([...persons, { name: newName }]);
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };
  console.log(persons, newName);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;

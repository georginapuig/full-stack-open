import { useState } from 'react';
import './App.css';

import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setfilterName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    persons.filter((person) => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        setPersons([...persons]);
      } else {
        setPersons([
          ...persons,
          { name: newName, number: newNumber, id: persons.length + 1 },
        ]);
      }
    });

    setNewName('');
    setNewNumber('');
  };

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterName = (event) => {
    setfilterName(event.target.value);
  };

  const filteredList = persons.filter((person) =>
    person.name.toLowerCase().match(filterName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterName={filterName} handleFilterName={handleFilterName} />

      <h2>Add new</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
      />

      <h2>Numbers</h2>

      <Persons filteredList={filteredList} />
    </div>
  );
};

export default App;

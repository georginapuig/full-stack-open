import Person from './Person';

export default function Persons({ filteredList }) {
  return filteredList.map((person) => (
    <Person key={person.name} person={person} />
  ));
}

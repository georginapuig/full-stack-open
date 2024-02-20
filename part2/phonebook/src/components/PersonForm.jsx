/* eslint-disable react/prop-types */
export default function PersonForm({
  addPerson,
  newName,
  newNumber,
  handleName,
  handleNumber,
}) {
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>

        <div>
          phone: <input value={newNumber} onChange={handleNumber} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>
  );
}

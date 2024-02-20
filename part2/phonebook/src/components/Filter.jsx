export default function Filter({ filterName, handleFilterName }) {
  return (
    <div>
      filter shown whith:{' '}
      <input value={filterName} onChange={handleFilterName} />
    </div>
  );
}

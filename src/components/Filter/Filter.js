export const Filter = ({ onType, value }) => {
  return (
    <>
      <h3>Find contact by name</h3>
      <input type="text" onChange={onType} value={value} />
    </>
  );
};

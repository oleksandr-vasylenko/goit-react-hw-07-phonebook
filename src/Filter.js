export const Filter = ({ onType, value }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" onChange={onType} value={value} />
    </>
  );
};

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <p>
      <li key={id}>
        {name}: {number}
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    </p>
  );
};

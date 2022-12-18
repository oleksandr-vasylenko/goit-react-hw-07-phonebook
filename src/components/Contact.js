export const Contact = ({ name, number, id }) => {
  return (
    <p>
      <li key={id}>
        {name}: {number}
      </li>
    </p>
  );
};

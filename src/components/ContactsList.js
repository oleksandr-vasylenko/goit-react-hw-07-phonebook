export const ContactsList = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

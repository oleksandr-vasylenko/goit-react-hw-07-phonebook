export const ContactsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
        </li>
      ))}
    </ul>
  );
};

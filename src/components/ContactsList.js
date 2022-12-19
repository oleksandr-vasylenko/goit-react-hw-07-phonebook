import { Contact } from './Contact';

export const ContactsList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <Contact
          name={item.name}
          number={item.number}
          id={item.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

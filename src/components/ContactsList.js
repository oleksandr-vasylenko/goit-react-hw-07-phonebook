import { Contact } from './Contact';

export const ContactsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <Contact name={item.name} number={item.number} id={item.id} />
      ))}
    </ul>
  );
};

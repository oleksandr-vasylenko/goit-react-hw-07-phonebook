import { Contact } from '../Contacts/Contact';
import { ContactsThumb } from './ContactsList.Styled';

export const ContactsList = ({ items, onDelete }) => {
  return (
    <ContactsThumb>
      {items.map(item => (
        <Contact
          name={item.name}
          number={item.number}
          id={item.id}
          onDelete={onDelete}
        />
      ))}
    </ContactsThumb>
  );
};

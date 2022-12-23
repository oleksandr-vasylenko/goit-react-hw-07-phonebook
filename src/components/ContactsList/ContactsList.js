import PropTypes from 'prop-types';
import { Contact } from '../Contacts/Contact';
import { ContactsThumb, ContactsItem } from './ContactsList.Styled';

export const ContactsList = ({ items, onDelete }) => {
  return (
    <ContactsThumb>
      {items.map(item => (
        <ContactsItem key={item.id}>
          <Contact
            contact={item}
            onDelete={onDelete}
            // name={item.name}
            // number={item.number}
          />
        </ContactsItem>
      ))}
    </ContactsThumb>
  );
};

ContactsList.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
};

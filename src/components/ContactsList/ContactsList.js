import PropTypes from 'prop-types';
import { Contact } from '../Contacts/Contact';
import { ContactsThumb } from './ContactsList.Styled';

export const ContactsList = ({ items, onDelete, id }) => {
  return (
    <ContactsThumb>
      {items.map(item => (
        <Contact
          name={item.name}
          number={item.number}
          id={item.id}
          onDelete={onDelete}
          key={item.id}
        />
      ))}
    </ContactsThumb>
  );
};

ContactsList.propTypes = {
  items: PropTypes.array,
  onDelete: PropTypes.func,
};

import PropTypes from 'prop-types';
import { ContactItem, DeleteContact } from './Contact.Styled';

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <ContactItem key={id}>
      {name}: {number}
      <DeleteContact onClick={() => onDelete(id)}>X</DeleteContact>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

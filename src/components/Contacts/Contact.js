import { ContactItem, DeleteContact } from './Contact.Styled';

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <ContactItem key={id}>
      {name}: {number}
      <DeleteContact onClick={() => onDelete(id)}>X</DeleteContact>
    </ContactItem>
  );
};

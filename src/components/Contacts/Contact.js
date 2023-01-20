import { deleteContact } from '../../redux/contactSlice';
import { ContactsItem, DeleteContactBtn } from './Contact.Styled';

export const Contact = ({ id, name, number, dispatch }) => {
  return (
    <ContactsItem key={id}>
      <p>
        {name}: {number}
      </p>
      <DeleteContactBtn
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        X
      </DeleteContactBtn>
    </ContactsItem>
  );
};

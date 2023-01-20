import { deleteContact } from '../../redux/contactSlice';
import { ContactsItem, ContactText, DeleteContactBtn } from './Contact.Styled';

export const Contact = ({ id, name, number, dispatch }) => {
  return (
    <ContactsItem key={id}>
      <ContactText>
        {name}: {number}
      </ContactText>
      <DeleteContactBtn
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        X
      </DeleteContactBtn>
    </ContactsItem>
  );
};

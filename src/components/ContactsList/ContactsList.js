import { List, ContactsItem } from './ContactsList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const contactList = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contactList.map(({ id, name, phone }) => (
        <ContactsItem key={id}>
          {name}: {phone}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </ContactsItem>
      ))}
    </List>
  );
};

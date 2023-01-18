import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

import {
  ContactsThumb,
  ContactsItem,
  ContactText,
  DeleteContact,
} from './ContactsList.Styled';

const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const renderContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ContactsThumb>
      {renderContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactText>
            {name}: {number}
            <DeleteContact
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              X
            </DeleteContact>
          </ContactText>
        </ContactsItem>
      ))}
    </ContactsThumb>
  );
};

export default ContactList;

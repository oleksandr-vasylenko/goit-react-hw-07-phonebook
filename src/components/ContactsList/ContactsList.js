import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  ContactsList,
  ContactsItem,
  ContactText,
  DeleteContactBtn,
} from './ContactsList.Styled';
import { deleteContact } from '../../redux/contactSlice';

const ContactList = () => {
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const renderContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ContactsList>
      {renderContacts.map(({ id, name, number }) => (
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
      ))}
    </ContactsList>
  );
};

export default ContactList;

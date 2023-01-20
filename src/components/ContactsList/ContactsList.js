import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ContactsThumb } from './ContactsList.Styled';
import { Contact } from 'components/Contacts/Contact';

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
        <Contact key={id} name={name} number={number} dispatch={dispatch} />
      ))}
    </ContactsThumb>
  );
};

export default ContactList;

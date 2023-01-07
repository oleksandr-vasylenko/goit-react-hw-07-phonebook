import { GlobalStyle } from '../../GlobalStyle';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Thumb } from './App.Styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    console.log(name, number);
    return setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  const typeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getfilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const deleteContact = contactId => {
    return setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Thumb>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={addContact} items={getfilteredContacts()} />

      <h2>Contacts</h2>
      <Filter onType={typeFilter} />
      {contacts.length > 0 && (
        <ContactsList items={getfilteredContacts()} onDelete={deleteContact} />
      )}
      <GlobalStyle />
    </Thumb>
  );
};

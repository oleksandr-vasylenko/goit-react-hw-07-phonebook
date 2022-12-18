import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';
import { Filter } from 'Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  typeContact = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getfilteredContacts = () => {
    const typeNormalizer = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(typeNormalizer);
    });
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.getfilteredContacts();
    return (
      <>
        <p>Phonebook</p>
        <ContactsForm onSubmit={this.addContact} />
        <Filter onType={this.typeContact} />
        {contacts.length > 0 && <ContactsList items={filteredContacts} />}
      </>
    );
  }
}

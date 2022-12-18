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

  typeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getfilteredContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });
  };

  render() {
    return (
      <>
        <p>Phonebook</p>
        <ContactsForm onSubmit={this.addContact} />
        <Filter onType={this.typeFilter} />
        {this.state.contacts.length > 0 && (
          <ContactsList items={this.getfilteredContacts()} />
        )}
      </>
    );
  }
}

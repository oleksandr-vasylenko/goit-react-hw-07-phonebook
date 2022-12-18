import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = name => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name }],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <p>Phonebook</p>
        <ContactsForm onSubmit={this.addContact} />
        {contacts.length > 0 && <ContactsList items={contacts} />}
      </>
    );
  }
}

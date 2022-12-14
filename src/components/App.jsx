import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = contactName => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { contactName, id: nanoid() }],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <ContactsForm onSubmit={this.addContact}></ContactsForm>
        {contacts.length > 0 && <ContactsList items={contacts}></ContactsList>}
      </>
    );
  }
}

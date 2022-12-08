import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';

export class App extends Component {
  // static defaultProps = {
  //   initialContacts: [],
  // };

  state = {
    contacts: [],
    name: '',
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
        <ContactsForm onAdd={this.addContact}></ContactsForm>
        <ContactsList items={contacts}></ContactsList>
      </>
    );
  }
}

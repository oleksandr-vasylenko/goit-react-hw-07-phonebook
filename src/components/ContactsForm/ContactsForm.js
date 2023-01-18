import { useSelector, useDispatch } from 'react-redux';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactSlice';
import { AddContactForm, AddContactButton } from './ContactsForm.Styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const addNewContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(item => {
        return item.name === contact.name;
      })
    ) {
      return alert(`${contact.name} is already in contacts`);
    }
    dispatch(addContact(contact));
  };

  const onFormInput = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'number') {
      setNumber(e.currentTarget.value);
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number });
    e.currentTarget.reset();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm onSubmit={onFormSubmit}>
        <input
          onChange={onFormInput}
          type="text"
          placeholder="Name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          onChange={onFormInput}
          placeholder="Phone"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>

        <AddContactButton type="submit">Add Contact</AddContactButton>
      </AddContactForm>
    </>
  );
};

export default ContactForm;

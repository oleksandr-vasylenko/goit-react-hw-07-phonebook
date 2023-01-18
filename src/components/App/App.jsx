import { useSelector } from 'react-redux';
import { GlobalStyle } from '../../GlobalStyle';
import ContactForm from '../ContactsForm/ContactsForm';
import ContactFilter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactsList';
import Notification from '../Notification/Notification';
import { Thumb } from './App.Styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <Thumb>
      <ContactForm />
      {contacts.length > 0 ? (
        <div>
          <ContactFilter />
          <ContactList />
        </div>
      ) : (
        <Notification />
      )}
      <GlobalStyle />
    </Thumb>
  );
};

import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { GlobalStyle } from '../../GlobalStyle';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Thumb } from './App.Styled';

export const App = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Thumb>
      <h1>Phonebook</h1>
      <ContactsForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {contactList.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      )}
      <GlobalStyle />
    </Thumb>
  );
};

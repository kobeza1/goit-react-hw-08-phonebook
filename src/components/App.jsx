import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Form } from './Form/Form';
import { Box, Loader } from './App.styled';
import { ContactsList } from './Contacts/ContactsList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      {isLoading && !error && <Loader>Request in progress...</Loader>}
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList />
      </Section>
    </Box>
  );
};

export default App;

import { useState, useEffect } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? defaultValue,
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (сontactName, сontactNumber) => {
    const newContact = {
      id: shortid.generate(),
      name: сontactName,
      number: сontactNumber,
    };

    const getDublicateContact = contacts.find(
      contact => contact.name === newContact.name,
    );

    if (getDublicateContact) {
      toast.info(`${newContact.name} is already in contacts!`);
    } else {
      setContacts([newContact, ...contacts]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const findContact = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm getContact={addContact} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} filterData={changeFilter} />
      <ContactList contacts={findContact()} removeContact={deleteContact} />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

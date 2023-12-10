import React, { useState, useEffect } from 'react';
import PhoneBookForm from './PhoneBook/PhoneBookForm';
import PhoneBookList from './PhoneBook/PhoneBookList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const normalizedFilter = name.toLowerCase();
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === normalizedFilter
    );
    if (isContactExist) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const deleteContactHandler = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const changeFilterHandler = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div
      style={{
        width: '300px',
        padding: '20px',
        display: 'block',
      }}
    >
      <PhoneBookForm onSubmit={formSubmitHandler} />
      <Filter filter={filter} changeFilterHandler={changeFilterHandler} />
      <PhoneBookList
        visibleContacts={visibleContacts}
        onDeleteContact={deleteContactHandler}
      />
    </div>
  );
}

export default App;

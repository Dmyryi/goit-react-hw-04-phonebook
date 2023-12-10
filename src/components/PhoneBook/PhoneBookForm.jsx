import React, { useState } from 'react';
import styles from './PhoneBookForm.module.css';

export default function PhoneBookForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    props.onSubmit(name, number);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label class={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          required
        />
      </label>
      <label class={styles.label}>
        Number
        <input
          type="tel    "
          name="number"
          value={number}
          onChange={handleChangeNumber}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

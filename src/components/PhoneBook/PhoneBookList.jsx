import React from 'react';

export default function Filter(props) {
  const handleDelete = id => {
    props.onDeleteContact(id);
  };
  return (
    <div>
      <ul>
        {props.visibleContacts.map(item => (
          <li key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

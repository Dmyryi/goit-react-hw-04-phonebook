import React from 'react';

export default function Filter(props) {
  return (
    <div>
      <label>
        Search
        <input
          type="text"
          value={props.filter}
          onChange={props.changeFilterHandler}
        />
      </label>
    </div>
  );
}

import React from 'react';

const Person = props => {
  return (
    <div>
      <h1>{props.item.name}</h1>
      <h2>{props.item.email}</h2>
      <h2>{props.item.role}</h2>
    </div>
  );
};

export default Person;

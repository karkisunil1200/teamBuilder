import React from 'react';
import {Item} from './InputFormStyled';

const Person = props => {
  return (
    <Item>
      <h1>{props.item.name}</h1>
      <h2>{props.item.email}</h2>
      <h2>{props.item.role}</h2>
    </Item>
  );
};

export default Person;

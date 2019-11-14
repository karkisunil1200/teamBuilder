import React, {useState} from 'react';

import Person from './Person';
import InputForm from './InputForm';
import {Heading, People} from './InputFormStyled';

const InputList = () => {
  const [list, setList] = useState([
    {id: 1, name: 'Sunil Karki', email: 'sunil@gmail.com', role: 'Web-Developer'}
  ]);

  const addToList = newList => {
    console.log(newList);
    const updatedList = {
      id: Date.now(),
      name: newList.name,
      role: newList.role,
      email: newList.email
    };

    setList([...list, updatedList]);
    console.log(list);
  };
  return (
    <div>
      <Heading>Welcome to InputList</Heading>
      <div className='inputList'>
        <InputForm addToList={addToList} />
      </div>
      <People>
        {list.map(item => {
          return <Person item={item} key={item.id} />;
        })}
      </People>
    </div>
  );
};

export default InputList;

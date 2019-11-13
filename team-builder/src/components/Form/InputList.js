import React, {useState} from 'react';

import Person from './Person';
import InputForm from './InputForm';

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
      <h1 className='heading'>Welcome to InputList</h1>
      <div className='inputList'>
        <InputForm addToList={addToList} />
      </div>
      {list.map(item => {
        return <Person item={item} key={item.id} />;
      })}
    </div>
  );
};

export default InputList;

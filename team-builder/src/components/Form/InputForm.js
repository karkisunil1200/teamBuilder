import React, {useState} from 'react';

const InputForm = props => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: ''
  });

  const changeHandler = event => {
    setFormState({...formState, [event.target.name]: event.target.value});

    // {
    //   console.log(event.target.name + ' ' + event.target.value);
    // }
  };

  const submitHandler = event => {
    event.preventDefault();

    props.addToList(formState);
    console.log('submitted...');

    setFormState({name: '', email: '', role: ''});
  };

  return (
    <div>
      <div className='container'>
        <form onSubmit={submitHandler}>
          <div className='inputs'>
            <lable htmlFor='name'>Name </lable>
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Enter name'
              value={formState.name}
              onChange={changeHandler}
              autoComplete='off'
            />
          </div>
          <div className='inputs'>
            <lable htmlFor='email'>Email </lable>
            <input
              id='email'
              type='text'
              name='email'
              placeholder='Enter email '
              value={formState.email}
              onChange={changeHandler}
              autoComplete='off'
            />
          </div>
          <div className='inputs'>
            <lable htmlFor='role'>Role </lable>
            <input
              id='role'
              type='role'
              name='role'
              placeholder='Enter role '
              value={formState.role}
              onChange={changeHandler}
              autoComplete='off'
            />
          </div>
          <button type='submit' className='btn'>
            Add me
          </button>
        </form>
        <h1 className='title'>Add an Person</h1>
      </div>
    </div>
  );
};

export default InputForm;

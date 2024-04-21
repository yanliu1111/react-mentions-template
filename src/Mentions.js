import { Mention, MentionsInput } from 'react-mentions';

import React from 'react';
import mentionStyle from './mentionStyle';
import style from './style';
import { useState } from 'react';

const users = [
  {
    id: 'tony',
    display: 'Tony Stark',
  },
  {
    id: 'pepper',
    display: 'Pepper Potts',
  },
  {
    id: 'natasha',
    display: 'Natasha Romanoff',
  },
  {
    id: 'steve',
    display: 'Steve Rogers',
  },
  {
    id: 'bruce',
    display: 'Bruce Banner',
  },
  {
    id: 'rocket',
    display: 'Rocket Raccoon',
  },
];

const fetchUsers = (query, callback) => {
  if (!query) return;

  setTimeout(() => {
    const filteredUsers = users.filter((user) =>
      user.display.toLowerCase().includes(query)
    );
    callback(filteredUsers);
  }, 2000);
};

const Mentions = () => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    console.log('onChange', e);
    setValue(e.target.value);
  };
  const onAdd = (e) => {
    console.log('onAdd', e);
  };
  return (
    <div className='comment-line'>
      <h3>comment line with mention people</h3>

      <MentionsInput
        //singleLine
        value={value}
        onChange={onChange}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={'Suggested mentions'}
        style={style}
      >
        <Mention style={mentionStyle} data={fetchUsers} onAdd={onAdd} />
      </MentionsInput>
    </div>
  );
};

export default Mentions;

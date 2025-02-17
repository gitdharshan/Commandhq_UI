import React from 'react';
import UserItem from './UserItem';
import Card from '../../Teacher module/UIELEMENTS/Card';
import './UserList.css';

const UserList = (props) => {
  if (!props.items || props.items.length === 0) {
    return (

      <div className='center'>
      <Card>
      <h1>No users found</h1>
      </Card>
       
      </div>
    );
  }

  return (
    <ul className='user-list'>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          department={user.department}
          subject={user.subject}
        />
      ))}
    </ul>
  );
};

export default UserList;

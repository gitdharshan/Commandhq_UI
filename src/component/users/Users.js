import React from 'react';
import UserList from './items/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Balaji',
      image: 'https://www.shutterstock.com/image-photo/young-teacher-260nw-704387410.jpg',
      department: 'CSE',
      subject: 'Java',
    },
    {
      id: 'u2',
      name:"sanjay",
      image:"https://www.shutterstock.com/image-photo/young-teacher-260nw-704387410.jpg",
      department:"CSE",
      subject:"Python"
    }
  ];

  return <UserList items={USERS} />;
};

export default Users;

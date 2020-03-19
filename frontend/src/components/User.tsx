import React from 'react';

interface IUser {
  name: string;
  email: string;
}

interface IProps {
  user: IUser;
}

const User = ({ user }: IProps) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name} <br />
      <strong>Email: </strong> {user.email} <br /><br />
    </div>
  );
};

export default User;
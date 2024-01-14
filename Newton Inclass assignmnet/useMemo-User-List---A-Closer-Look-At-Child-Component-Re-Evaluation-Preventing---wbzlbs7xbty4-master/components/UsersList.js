import { useMemo } from 'react';

function UsersList({ users, startingLetter }) {
  const filteredUsers =useMemo( ()=>{
    return users.filter(user=>user.name.startsWith(startingLetter))
  },[startingLetter])
  return (
    <ul>
      {filteredUsers.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}

export default UsersList;

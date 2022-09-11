import { useState } from 'react';
import UsersList from './components/Users/UsersList';
import NewUsers from './components/NewUsers/NewUsers';

const App= () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUsers onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  ) 
}

export default App;

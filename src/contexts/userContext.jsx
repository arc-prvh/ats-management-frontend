import React, { useContext, useState } from 'react';

const UserContext = React.createContext();
const UpdateUserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function useUpdateUser() {
  return useContext(UpdateUserContext);
}

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <UpdateUserContext.Provider value={setUser}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  );
}

export default UserContextProvider;

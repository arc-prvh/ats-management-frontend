import React, { useContext, useState } from 'react';

const AccessTokenContext = React.createContext();
const UpdateAccessTokenContext = React.createContext();

export function useAccessToken() {
  return useContext(AccessTokenContext);
}

export function useUpdateAccessToken() {
  return useContext(UpdateAccessTokenContext);
}

function AuthContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  return (
    <AccessTokenContext.Provider value={accessToken}>
      <UpdateAccessTokenContext.Provider value={setAccessToken}>
        {children}
      </UpdateAccessTokenContext.Provider>
    </AccessTokenContext.Provider>
  );
}

export default AuthContextProvider;

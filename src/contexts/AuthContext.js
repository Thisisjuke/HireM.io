import React, { useState } from 'react';

const AuthContext = React.createContext([null, () => {}]);

const AuthProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(null);
  return (
    <AuthContext.Provider value={[authenticated, setAuthenticated]}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

import React, { useState } from 'react';

const UserContext = React.createContext([null, () => {}]);

const UserProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(null);
  return (
    <UserContext.Provider value={[authenticated, setAuthenticated]}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

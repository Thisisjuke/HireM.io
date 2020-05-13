import React, { useState } from 'react';

const UserContext = React.createContext([null, () => {}]);

const UserProvider = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

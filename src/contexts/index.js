import React from 'react';

import createPersistedState from 'use-persisted-state';

let userObj = {
    fname: '',
    lname: '',
    username: '',
    password: '',
    role: ''
};

export const UserContext = React.createContext(userObj)

// export const useUserState = createPersistedState(userObj);

// export const [user, setUser] = useUserState(userObj);

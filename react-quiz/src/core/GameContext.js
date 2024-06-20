import { createContext } from "react";

export const GameContext = createContext({
    isConnected: false,
    setIsConnected: () => {},
    usersConnected: 0,
    setUsersConnected: () => {},
    userData: {
        name: '',
        avatar: null,
    },
    setUserData: () => {},
    partnerData: {
        name: '',
        avatar: null,
    },
    setPartnerData: () => {}
});
import { createContext } from "react";

export const SocketContext = createContext({
    isConnected: false,
    setIsConnected: () => {},
    usersConnected: 0,
    setUsersConnected: () => {},
});
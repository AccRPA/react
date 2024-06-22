import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// Use / instead of http://localhost:4000', because instead of setting the cors in the server
// the vite.config.js file in this project (frontend) is configured to connect to the server 4000
const URL = process.env.NODE_ENV === 'production' ? undefined : '/';

export const socket = io(URL, {
    autoConnect: false,
    //reconnection: true,
    timeout: 5000
});

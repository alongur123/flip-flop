const io = require('socket.io-client');
const Mysocket = io.connect('http://localhost:3600');
export const socket = Mysocket;
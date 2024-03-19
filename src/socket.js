import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://online-sketchbook-tool-server.onrender.com' : 'http://localhost:5000';
export const socket = io(URL);
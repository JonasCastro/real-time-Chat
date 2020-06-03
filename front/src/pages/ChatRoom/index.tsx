import React, { useEffect, useState } from 'react';

import socketIOClient from 'socket.io-client';
import { Container } from './styles';
import ContainerLeft from './components/ContainerLeft';
import ContainerRight from './components/ContainerRight';
import { getUser } from '../../services/auth';

const ChatRoom: React.FC = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  useEffect(() => {
    const socketIO = socketIOClient('http://127.0.0.1:3333');
    setSocket(socketIO);
    socketIO.emit('newConnection', getUser());
  }, []);
  return (
    <Container>
      <ContainerLeft socket={socket} />
      <ContainerRight socket={socket} />
    </Container>
  );
};

export default ChatRoom;

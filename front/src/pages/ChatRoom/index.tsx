import React from 'react';

import { Container } from './styles';
import ContainerLeft from './components/ContainerLeft';
import ContainerRight from './components/ContainerRight';

const ChatRoom: React.FC = () => (
  <Container>
    <ContainerLeft />
    <ContainerRight />
  </Container>
);

export default ChatRoom;

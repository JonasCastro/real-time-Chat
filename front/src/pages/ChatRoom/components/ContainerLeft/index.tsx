import React from 'react';

import Participant from '../Participant';
import { Container, Header, Content, Title, ContainerParticipant } from './styles';
import { IUser } from '../../../../interface/user';

const participants: IUser[] = [
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
  {
    id: 29816458,
    avatar_url: 'https://avatars3.githubusercontent.com/u/29816458?v=4',
    name: 'Jonas Castro',
  },
];
const ContainerLeft: React.FC = () => (
  <Container>
    <Header>
      <Title>Participants</Title>
    </Header>
    <Content>
      {participants.map((participant) => (
        <ContainerParticipant key={participant.id}>
          <Participant value={participant} />
        </ContainerParticipant>
      ))}
    </Content>
  </Container>
);

export default ContainerLeft;

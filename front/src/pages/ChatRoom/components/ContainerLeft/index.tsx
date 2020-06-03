import React, { useEffect, useState } from 'react';

import Participant from '../Participant';
import { Container, Header, Content, Title, ContainerParticipant } from './styles';
import { IUser } from '../../../../interface/user';
import { getUser } from '../../../../services/auth';

interface Props {
  socket: SocketIOClient.Socket | undefined;
}

const ContainerLeft: React.FC<Props> = ({ socket }: Props) => {
  const [participants, setParticipants] = useState<IUser[]>();

  useEffect(() => {
    if (socket) {
      socket.on('newParticipant', (newParticipants: IUser[]) => {
        setParticipants(newParticipants);
      });
    }
  }, [socket]);
  return (
    <Container>
      <Header>
        <Title>Participants</Title>
      </Header>
      <Content>
        {participants?.map(
          (participant) =>
            getUser().id !== participant.id && (
              <ContainerParticipant key={participant.id}>
                <Participant value={participant} />
              </ContainerParticipant>
            ),
        )}
      </Content>
    </Container>
  );
};

export default ContainerLeft;

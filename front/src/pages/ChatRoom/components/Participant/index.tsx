import React from 'react';

import { Container, Avatar, Name } from './styles';

interface ParticipantUser {
  id: number;
  name: string;
  avatar_url: string;
}
interface Props {
  value: ParticipantUser;
  textColor?: string;
  size?: number;
}

const Participant: React.FC<Props> = ({ value, textColor, size }: Props) => (
  <Container>
    <Avatar size={size} src={value.avatar_url} alt="Avatar" />
    <Name color={textColor}>{value.name}</Name>
  </Container>
);

export default Participant;

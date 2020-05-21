import React from 'react';

import { Container, Avatar, Name } from './styles';
import { IUser } from '../../../../interface/user';

interface Props {
  value: IUser;
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

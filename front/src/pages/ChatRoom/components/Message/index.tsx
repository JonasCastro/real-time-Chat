import React from 'react';

import { BoxMessage, Text, DateMessage } from './styles';
import Participant from '../Participant';

interface MessageUser {
  user_id: number;
  value: string;
}
interface Props {
  messageUser: MessageUser;
}
const user = {
  id: 2,
  avatar_url: 'https://avatars1.githubusercontent.com/u/55038230?v=4',
  name: 'Samila Castro',
};
const Message: React.FC<Props> = ({ messageUser }: Props) => (
  <BoxMessage isMe={user.id === messageUser.user_id}>
    <Participant size={30} value={user} textColor="black" />
    <Text>{messageUser.value}</Text>
    <DateMessage>20/12/2020 12:30</DateMessage>
  </BoxMessage>
);

export default Message;

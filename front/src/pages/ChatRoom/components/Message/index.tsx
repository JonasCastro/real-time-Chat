import React from 'react';

import { BoxMessage, Text, DateMessage } from './styles';
import Participant from '../Participant';
import { getUser } from '../../../../services/auth';
import { IMessage } from '../../../../interface/Message';

interface Props {
  messageUser: IMessage;
}
const Message: React.FC<Props> = ({ messageUser }: Props) => {
  const user = getUser();
  return (
    <BoxMessage isMe={user.id === messageUser.user.id}>
      <Participant size={30} value={messageUser.user} textColor="black" />
      <Text>{messageUser.value}</Text>
      <DateMessage>{messageUser.date}</DateMessage>
    </BoxMessage>
  );
};

export default Message;

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
    <BoxMessage isMe={user.id === messageUser.user_id}>
      <Participant size={30} value={user} textColor="black" />
      <Text>{messageUser.value}</Text>
      <DateMessage>20/12/2020 12:30</DateMessage>
    </BoxMessage>
  );
};

export default Message;

import React, { useRef, useState, useEffect } from 'react';

import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Container, Header, Content, Form, User, ButtonLogout, Input } from './styles';
import { logout, getUser } from '../../../../services/auth';
import Message from '../Message';
import Participant from '../Participant';
import { IMessage } from '../../../../interface/Message';

interface Props {
  socket: SocketIOClient.Socket | undefined;
}
const ContainerRight: React.FC<Props> = ({ socket }: Props) => {
  const history = useHistory();
  const content = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<IMessage[]>();
  const [newMessage, setNewMessage] = useState('');
  const user = getUser();

  useEffect(() => {
    if (socket) {
      socket.on('newMessages', (newMessages: IMessage[]) => {
        setMessages(newMessages);
      });

    }
  }, [socket]);

  function sendMessage() {
    if (messages) {
      const messageUser: IMessage[] = [
        ...messages,
        {
          user,
          value: newMessage,
          date: new Date().toLocaleString()
        },
      ];
      setMessages(messageUser);
    } else {
      setMessages([
        {
          user,
          value: newMessage,
          date: new Date().toLocaleString()
        },
      ]);
    }
    if (content && content.current) {
      content.current.scrollTo(0, content.current.scrollHeight);
    }
    if (socket)
      socket.emit('sendMessage', {
        user,
        value: newMessage,
        date: new Date().toLocaleString()
      });
    setNewMessage('');
  }
  return (
    <Container>
      <Header>
        <User>
          <Participant value={user} textColor="black" />
        </User>
        <ButtonLogout
          type="button"
          onClick={() => {
            if (socket) { socket.emit('logout', { user }); socket.emit('disconnect') }
            history.push('/');
            logout();
          }}
        >
          <FiPower size={24} color="#E02041" />
        </ButtonLogout>
      </Header>
      <Content ref={content}>
        {messages?.map((message) => (
          <Message messageUser={message} />
        ))}
      </Content>
      <Form>
        <Input
          id="message"
          placeholder="Type a message"
          name="message"
          value={newMessage}
          onChange={(e) => {
            if (!e.target.value.includes('\n')) {
              setNewMessage(e.target.value);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
      </Form>
    </Container>
  );
};

export default ContainerRight;

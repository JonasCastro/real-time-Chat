import React, { useRef, useState, useEffect } from 'react';

import { FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Container, Header, Content, Form, User, ButtonLogout, Input } from './styles';
import { logout, getUser } from '../../../../services/auth';
import Message from '../Message';
import Participant from '../Participant';

interface MessageUser {
  user_id: number;
  value: string;
}
const messagesExemple: MessageUser[] = [];

const ContainerRight: React.FC = () => {
  const history = useHistory();
  const content = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageUser[]>();
  const [newMessage, setNewMessage] = useState('');
  const user = getUser();

  useEffect(() => {
    setMessages(messagesExemple);
  }, []);

  function sendMessage() {
    if (messages) {
      const messageUser: MessageUser[] = [
        ...messages,
        {
          user_id: 1,
          value: newMessage,
        },
      ];
      setMessages(messageUser);
    } else {
      setMessages([
        {
          user_id: 1,
          value: newMessage,
        },
      ]);
    }
    if (content && content.current) {
      content.current.scrollTo(0, content.current.scrollHeight);
    }
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

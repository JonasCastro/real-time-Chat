import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Title, Container, Paper, Input, Alert, Closebtn } from './styles';
import { login } from '../../services/auth';

interface Props extends RouteComponentProps {}
interface User {
  id: number;
  name: string;
  avatar_url: string;
}
const SignIn: React.FC<Props> = ({ history }: Props) => {
  const [username, setUsername] = useState('');
  const [openAlert, setOpenAlert] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.ok) {
      const { id, name = '', avatar_url = '' }: User = await response.json();
      login({
        id,
        name,
        avatar_url,
      });
      history.push('/chatroom');
    } else {
      setOpenAlert(true);
    }
  }
  return (
    <Container>
      <Paper>
        {openAlert && (
          <Alert>
            <Closebtn
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              &times;
            </Closebtn>
            Github user not found!
          </Alert>
        )}
        <Title>Enter your Github Username</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="username"
            placeholder="Github Username "
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="button" type="submit">
            Sign in
          </button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;

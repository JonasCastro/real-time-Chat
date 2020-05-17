import styled from 'styled-components';

interface Props {
  isMe: boolean;
}
export const BoxMessage = styled.div`
  background: ${(props: Props) => (props.isMe ? '#9de1fe' : '#EAEAEA')};
  max-width: 44%;
  padding: 15px;
  margin-bottom: 5px;
  align-self: ${(props: Props) => (props.isMe ? 'flex-end' : 'flex-start')};
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const Text = styled.p`
  font-style: normal;
  color: #444;
  word-wrap: break-word;
  margin: 15px 0;
`;
export const DateMessage = styled.small`
  font-style: oblique;
  font-size: 12px;
  color: rgb(39, 39, 39);
`;

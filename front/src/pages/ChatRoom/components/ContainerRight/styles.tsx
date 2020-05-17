import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
`;

export const Header = styled.div`
  height: 10vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 10px;
`;
export const Form = styled.div`
  height: 10vh;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonLogout = styled.button`
  background-color: white;
  border: none;
`;

export const Input = styled.textarea`
  font-style: normal;
  font-weight: bold;
  width: 100%;
  resize: none;
  height: 50px;
  max-height: 70px;
  color: #333;
  border: 2px solid #dcdce6;
  border-radius: 8px;
  padding: 12px 24px;
  box-shadow: 0 1px -2px rgba(0, 0, 0, 0.5);
`;

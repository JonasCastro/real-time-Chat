import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #495867;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const Paper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  font-style: normal;
  font-weight: bold;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;

export const Alert = styled.p`
  padding: 20px;
  background-color: #f44336;
  color: white;
  font-style: normal;
  font-weight: bold;
  margin: 10px;
`;

export const Closebtn = styled.span`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
`;

export const Header = styled.div`
  height: 10vh;
  background-color: #495867;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  height: 90vh;
  background-color: #495867ee;
  overflow-y: auto;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
`;

export const ContainerParticipant = styled.div`
  border: 1px solid #495867;
  padding: 10px;
`;

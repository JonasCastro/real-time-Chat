import styled from 'styled-components';

interface Props {
  color?: string;
  size?: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: ${({ size = 45 }: Props) => `${size}px`};
  height: ${({ size = 45 }: Props) => `${size}px`};
  border-radius: 50%;
`;
export const Name = styled.p`
  font-style: normal;
  font-weight: bold;
  color: ${({ color = 'white' }: Props) => color};
  font-size: ${({ size = 17 }: Props) => `${size - 28}px`};
  margin-left: 10px;
`;

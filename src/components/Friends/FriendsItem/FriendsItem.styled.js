import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  width: 330px;
  padding: ${props => props.theme.spacing(3)}px;
  background-color: ${props => props.theme.colors.bgPrimary};
`;

export const Status = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin: 0 ${props => props.theme.spacing(2.5)}px;
  padding: ${props => props.theme.spacing(1.5)}px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.bgAccent};
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.textPrimary};
`;

import styled from '@emotion/styled';

export const List = styled.ul`
  width: max-content;
  padding: ${props => props.theme.spacing(4)}px;
  background-color: ${props => props.theme.colors.bgSecondary};

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

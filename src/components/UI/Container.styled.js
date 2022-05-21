import styled from '@emotion/styled';

export const ContainerStyled = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  ${props => props.flex && flexed}
`;

const flexed = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

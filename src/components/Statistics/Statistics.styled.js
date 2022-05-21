import styled from '@emotion/styled';

export const Section = styled.section`
  text-align: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  padding: ${props => props.theme.spacing(4)}px;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  padding: ${props => props.theme.spacing(4)}px;
  background-color: ${props => props.color};
`;

export const Label = styled.span`
  display: block;
`;

export const Percentage = styled.span`
  display: block;
`;

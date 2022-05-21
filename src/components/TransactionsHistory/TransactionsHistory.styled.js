import styled from '@emotion/styled';

export const Table = styled.table`
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  text-transform: capitalize;
  background-color: ${props => props.theme.table.borders};
  border-radius: 8px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  overflow: hidden;

  & td,
  & th {
    width: calc(100% / 3);
    padding: ${props => props.theme.spacing(4)}px;
  }

  & thead {
    color: white;
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.spacing(0.5)}px;
    background-color: ${props => props.theme.table.head};
  }

  & tbody tr {
    background-color: ${props => props.theme.table.rowsFirst};
  }

  & tbody tr:nth-of-type(2n + 1) {
    background-color: ${props => props.theme.table.rowsSecond};
  }
`;

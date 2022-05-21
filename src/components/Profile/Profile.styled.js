import styled from '@emotion/styled';

export const User = styled.div`
  width: 300px;
  background-color: ${props => props.theme.colors.bgPrimary};
  color: ${props => props.theme.colors.textSecondary};
  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 315px;
  padding: ${({ theme, spacing }) => theme.spacing(spacing)}px;
`;

export const Avatar = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.bgAccent};
  overflow: hidden;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(1.03);
  }
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-top: 16px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Tag = styled.p`
  /* TAG STYLES HERE */
`;

export const Location = styled.p`
  /* LOCATION STYLES HERE */
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.bgSecondary};
  border-top: 1px solid ${props => props.theme.colors.border};

  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100px;
    height: 100px;
    text-align: center;
  }

  & li:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.border};
  }
`;

export const Label = styled.span`
  font-size: 14px;
  display: block;
  margin-bottom: 4px;
`;

export const Quantity = styled.span`
  display: block;
  color: ${props => props.theme.colors.textPrimary};
  font-size: 18px;
  font-weight: 700;
`;

import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 620px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Name = styled.span`
  color: ${props => props.theme.colors.raspberry};
  margin-right: 16px;
`;

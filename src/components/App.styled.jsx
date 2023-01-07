import styled from 'styled-components';

export const Box = styled.div`
  padding: ${props => props.theme.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSize.m};
`;

export const Loader = styled.p`
  position: fixed;

  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

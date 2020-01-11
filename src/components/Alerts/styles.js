import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e81f10;
  border-radius: 7px;
  position: absolute;
  font-size: 14px;
  right: ${props => props.showAlert ? '3%' : '-100%'};
  top: 580px;
  padding: 1.5em;
  display: ${props => props.displayNone && props.showAlert ? 'none' : 'flex'};;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 2em;
  color: white;
  transition: all 1s ease;
  transition-duration: 1s; 

  &::before {
    content: '';
    position: absolute;
    background-color: #e81f10;
    width: 2em;
    height: 2em;
    right: -0.8em;
    transform: rotate(45deg);
  }
`;

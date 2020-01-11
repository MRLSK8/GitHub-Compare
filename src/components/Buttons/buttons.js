import styled from 'styled-components';

export const ButtonDelete = styled.button`
  font-size: 1.1em;
  position: absolute;
  padding: 0.1em;
  background: transparent;
  color: rgba(0, 0, 0, 0.5);
  width: 1.2em;
  border: 0;
  margin-left: 13em;

  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
  }
`;

export const ButtonUpdate = styled.button`
  font-size: 1em;
  position: absolute;
  padding: 0.1em;
  background: transparent;
  color: rgba(0, 0, 0, 0.5);
  width: 1.2em;
  border: 0;

  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 1);
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5em;
`;

export const Form = styled.form`
  margin-top: 1em;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 3em;
    padding: 0 1.5em;
    background-color: #FFF;
    border: 0;
    font-size: 1em;
    color: #444;
    border-radius: 3px;
  }

  button {
    height: 3em;
    padding: 0 1.5em;
    margin-left:10px;
    background-color: #63f5b8;
    color: #FFF;
    border: 0;
    font-size: 1em;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background-color: #52D89F;
      cursor: pointer;
    }
  }
`;
import styled from 'styled-components';
import size from '../../styles/Sizes';

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

  @media (max-width: ${size.mobileL}) {
    display: flex;
    flex-direction: column;
  }

  input {
    flex: 1;
    height: 3em;
    padding: 0 1.5em;
    background-color: #fff;
    font-size: 1em;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #F00' : 0)};

    @media (max-width: ${size.mobileL}) {
      padding: 1em 1.5em;
      margin-bottom: 5px;
      margin-left: 10px;
    }
  }

  button {
    height: 3em;
    padding: 0 1.5em;
    margin-left: 10px;
    background-color: #63f5b8;
    color: #fff;
    border: 0;
    font-size: 1em;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background-color: #52d89f;
      cursor: pointer;
    }
  }
`;

import React from 'react';
import Logo from '../assets/Logo.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5em;
`;

const Form = styled.form`
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

export default function Main() {
  return (
    <Container>
      <img src={Logo} alt='Logo Github Compare' />
      <Form action=''>
        <input
          type='text'
          name='input'
          id='input'
          placeholder='usuário/repositório'
        />
        <button type="submit">OK</button>
      </Form>
    </Container>
  );
}

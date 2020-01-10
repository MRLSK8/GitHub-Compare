import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';
import api from '../../services/api';
import moment from 'moment';

export default function Main() {
  const [repositories, setRepositories] = useState([]);
  const [repositoryInput, setRepositoryInput] = useState('');

  useEffect(() => {}, [repositories]);

  const handleSubmit = async event => {
    event.preventDefault();

    await api
      .get(`repos/${repositoryInput}`)
      .then(response => {
        const {data: repository} = response;
        repository.lastCommit = moment(repository.pushed_at).fromNow();
        
        setRepositories([...repositories, repository]);
        setRepositoryInput('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container>
      <img src={Logo} alt='Logo Github Compare' />
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          name='input'
          id='input'
          value={repositoryInput}
          placeholder='usuário/repositório'
          onChange={event => setRepositoryInput(event.target.value)}
        />
        <button type='submit'>OK</button>
      </Form>
      <CompareList repositories={repositories} />
    </Container>
  );
}

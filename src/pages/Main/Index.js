import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';
import api from '../../services/api';
import moment from 'moment';

export default function Main() {
  const [repositories, setRepositories] = useState([]);
  const [repositoryInput, setRepositoryInput] = useState('');
  const [repositoryError, setRepositoryError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savedId, setSavedId] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('reposSaved'));
    if (data) {
      const inputsSearched = data.map(item => api.get(`repos/${item}`));

      Promise.all(inputsSearched)
        .then(result => result.map(item => item.data))
        .then(item => setRepositories(item))
        .catch(err => console.log(err));

      setSavedId(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reposSaved', JSON.stringify(savedId));
  }, [savedId]);

  const handleSubmit = async event => {
    event.preventDefault();

    setLoading(true);

    await api
      .get(`repos/${repositoryInput}`)
      .then(response => {
        const { data: repository } = response;
        repository.lastCommit = moment(repository.pushed_at).fromNow();

        setSavedId([...savedId, repositoryInput]);

        setRepositories([...repositories, repository]);
        setRepositoryInput('');
        setRepositoryError(false);
      })
      .catch(err => {
        console.log(err);
        setRepositoryError(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <img src={Logo} alt='Logo Github Compare' />

      <Form withError={repositoryError} onSubmit={handleSubmit}>
        <input
          type='text'
          name='input'
          id='input'
          value={repositoryInput}
          placeholder='usuário/repositório'
          onChange={event => setRepositoryInput(event.target.value)}
        />
        <button type='submit'>
          {loading ? <i className='fa fa-spinner fa-pulse'></i> : 'Ok'}
        </button>
      </Form>
      <CompareList repositories={repositories} />
    </Container>
  );
}

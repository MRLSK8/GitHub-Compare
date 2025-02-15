import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';
import api from '../../services/api';
import moment from 'moment';
import Alert from '../../components/Alerts/index';

export default function Main() {
  const [repositories, setRepositories] = useState([]);
  const [repositoryInput, setRepositoryInput] = useState('');
  const [repositoryError, setRepositoryError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savedSearches, setSavedSearches] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [displayNone, setDisplayNone] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('reposSaved'));
    if (data) {
      const inputsSearched = data.map(item => api.get(`repos/${item}`));

      Promise.all(inputsSearched)
        .then(repositories => repositories.map(repository => repository.data))
        .then(repositories =>
          repositories.map(repository => {
            repository.lastCommit = moment(repository.pushed_at).fromNow();
            return repository;
          })
        )
        .then(repositories => setRepositories(repositories))
        .catch(err => console.log(err));

      setSavedSearches(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reposSaved', JSON.stringify(savedSearches));
  }, [savedSearches]);

  const handleSubmit = async event => {
    event.preventDefault();

    setLoading(true);

    await api
      .get(`repos/${repositoryInput}`)
      .then(response => {
        const { data: repository } = response;
        repository.lastCommit = moment(repository.pushed_at).fromNow();

        setSavedSearches([...savedSearches, repositoryInput]);

        setRepositories([...repositories, repository]);
        setRepositoryInput('');
        setRepositoryError(false);
        setShowAlert(false);
      })
      .catch(err => {
        setDisplayNone(false);
        setShowAlert(true);
        setRepositoryError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {setShowAlert(false);}, 3000);
        setTimeout(() => {setDisplayNone(true);}, 5000);
      });
  };

  const handleRemoveRepository = id => {
    var searchString = null;

    const newRepositories = repositories.filter(repository => {
      if (repository.id !== id) {
        return true;
      } else {
        searchString = repository.full_name;
        return false;
      }
    });

    const newLocalStorage = savedSearches.filter(
      search => search !== searchString
    );

    setSavedSearches(newLocalStorage);

    setRepositories(newRepositories);
  };

  const handleUpdateRepository = async id => {
    const newRepositories = repositories.find(
      repository => repository.id === id
    );

    await api
      .get(`repos/${newRepositories.full_name}`)
      .then(response => {
        const { data: repository } = response;
        repository.lastCommit = moment(repository.pushed_at).fromNow();
        const newRepos = repositories.map(repo =>
          repo.id === repository.id ? (repo = repository) : repo
        );

        setRepositories(newRepos);
      })
      .catch(err => {
        console.log(err);
      });
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
      <CompareList
        repositories={repositories}
        removeRepository={handleRemoveRepository}
        updateRepository={handleUpdateRepository}
      />
      <Alert showAlert={showAlert} displayNone={displayNone}/>
    </Container>
  );
}

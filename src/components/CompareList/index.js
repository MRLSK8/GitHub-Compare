import React from 'react';
import { Container, Repository } from './styles';
import { ButtonDelete, ButtonUpdate } from '../Buttons/buttons';

export default function CompareList({ repositories, removeRepository, updateRepository }) {
  return (
    <Container>
      {repositories.map(repository => (
        <Repository key={repository.id}>
          <ButtonDelete onClick={() => removeRepository(repository.id)}>
            <i className='fa fa-times-circle'></i>
          </ButtonDelete>

          <ButtonUpdate onClick={() => updateRepository(repository.id)}>
            <i className='fa fa-retweet'></i>
          </ButtonUpdate>

          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>
          <ul>
            <li>
              {repository.stargazers_count} <small>stars</small>
            </li>
            <li>
              {repository.forks_count} <small>forks</small>
            </li>
            <li>
              {repository.open_issues_count} <small>issues</small>
            </li>
            <li>
              {repository.lastCommit} <small>last commit</small>
            </li>
          </ul>
        </Repository>
      ))}
    </Container>
  );
}

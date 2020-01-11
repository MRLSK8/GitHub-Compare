import styled from 'styled-components';
import size from '../../styles/Sizes';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3em;

  @media (max-width: ${size.laptop}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width:  ${size.tablet}) {
    display: grid;
    
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${size.mobileL}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Repository = styled.div`
  width: 250px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 1em 0.8em;

  @media (max-width:  ${size.laptop}) {
    margin-bottom: 20px;
  }

  header {
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      max-width: 4em;
      height: auto;
    }

    strong {
      font-size: 1.5em;
      margin-top: 0.5em;
    }

    small {
      font-size: 0.7em;
    }
  }

  ul {
    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 0.8em;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

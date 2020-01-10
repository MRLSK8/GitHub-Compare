import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3em;
`;

export const Repository = styled.div`
  width: 250px;
  background-color: #FFF;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  
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

      &:nth-child(2n - 1){
        background-color: rgba(0, 0, 0, .1);
      }
    }
  }
`;


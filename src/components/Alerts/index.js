import React from 'react';
import { Container } from './styles';

export default function Alerts({showAlert, displayNone}) {
  return (
    <Container showAlert={showAlert} displayNone={displayNone}>
      Repositório não encontrado!
    </Container>
  );
}

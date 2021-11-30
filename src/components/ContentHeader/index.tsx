import React from 'react';
import {
  Container,
  Title,
  Controllers
} from './styles';

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Título</h1>
      </Title>
      <Controllers>
        <button type="button">Button</button>
        <button type="button">Button</button>
      </Controllers>
    </Container>
  );
}

export default ContentHeader;
import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

// import { Title } from './style';
import { Container, Form, SubmitButton } from './style';

function Main() {
  return (
    // <Title>Hello World!</Title>
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />
        <SubmitButton disabled>
          {' '}
          <FaPlus color="#FFF" size={14} />{' '}
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;

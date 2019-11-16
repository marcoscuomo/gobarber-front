import React from 'react';

// import { Container } from './styles';

export default function Repository({ match }) {
  return <h1>Repositiry: {decodeURIComponent(match.params.repository)}</h1>;
}

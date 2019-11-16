import React, { Component } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

// export default function Repository({ match }) {
export default class Repository extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repName}`),
      api.get(`/repos/${repName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    // console.log(repository);
    // console.log(issues);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;
    return <h1>Repositiry</h1>;
    // return <h1>Repositiry: {decodeURIComponent(match.params.repository)}</h1>;
  }
}

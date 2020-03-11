import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import GetRequest from '../services/GetRequest.js';
import Search from './Search.jsx';
import GitHubCard from './GitHubCard.jsx';

const username = 'Pergamene';

const styles = {
  root: {
    width: '100%',
  },
};

class GitHubCards extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      searchUsername: username,
      searchInput: '',
    }
  }

  componentDidMount() {
    const getData = async () => {
      const result = await GetRequest.getRequest(this.state.searchUsername);
      const resultData = [result.user];
      result.followers.forEach(follower => {
        resultData.push(follower.data);
      });
      this.setUserData(resultData);
    };
    getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchUsername !== this.state.searchUsername) {
      const getData = async () => {
        const result = await GetRequest.getRequest(this.state.searchUsername);
        const resultData = [result.user];
        result.followers.forEach(follower => {
          resultData.push(follower.data);
        });
        this.replaceUserData(resultData);
      };
      getData();
    }
  }

  setUserData = data => {
    this.setState({
      userData: [...(this.state.userData), ...data],
    });
  }

  replaceUserData = data => {
    this.setState({
      userData: [...data],
    });
  }

  handleSearchChange = event => {
    this.setState({searchInput: event.target.value});
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    this.setState({searchUsername: this.state.searchInput});
    this.setState({searchInput: ''});
  }

  handleSearchClear = event => {
    event.preventDefault();
    this.setState({searchUsername: username});
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Search searchInput={this.state.searchInput} handleSearchChange={this.handleSearchChange} handleSearchSubmit={this.handleSearchSubmit} handleSearchClear={this.handleSearchClear} />
        {this.state.userData.map(data => {
          return <GitHubCard data={data} key={data.id} />
        })}
      </div>
    )
  }
}

export default withStyles(styles)(GitHubCards);

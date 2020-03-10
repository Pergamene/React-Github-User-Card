import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import GetRequest from '../services/GetRequest.js';
import GitHubCard from './GitHubCard.jsx';

const username = 'Pergamene'

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
    }
  }

  componentDidMount() {
    const getData = async () => {
      const result = await GetRequest.getRequest(username, true);
      const resultData = [result.user];
      result.followers.forEach(follower => {
        resultData.push(follower.data);
      });
      this.setUserData(resultData);
    };
    getData();
  }

  setUserData = data => {
    this.setState({
      userData: [...(this.state.userData), ...data],
    });
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.userData.map(data => {
          return <GitHubCard data={data} key={data.id} />
        })}
      </div>
    )
  }
}

export default withStyles(styles)(GitHubCards);

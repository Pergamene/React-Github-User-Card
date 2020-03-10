import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 1px 6px -2px #000',
    marginBottom: '30px',
    backgroundColor: '#FFF',
  },
  img: {
    width: '150px',
    height: '150px',
    borderRadius: '3px',
    marginRight: '20px',
  },
  name: {
    margin: '0',
    fontSize: '34px',
  },
  username: {
    fontSize: '18px',
    fontStyle: 'italic',
    margin: '3px 0 10px',
  },
  p: {
    fontSize: '14px',
    margin: '0 0 3px',
  },
};

class GitHubCard extends React.Component {

  render() {
    const { data, classes } = this.props;
    return (
      <div className={classes.root}>
        <img className={classes.img} src={data.avatar_url} alt="github profile" />
        <div className="card-info">
          <h3 className={classes.name}>{data.name}</h3>
          <p className={classes.username}>{data.login}</p>
          <p className={classes.p}>{`Location: ${data.location}`}</p>
          <p className={classes.p}>
            {`Profile: `}
            <a href={data.html_url}>{data.html_url}</a>
          </p>
          <p className={classes.p}>{`Followers: ${data.followers}`}</p>
          <p className={classes.p}>{`Following: ${data.following}`}</p>
          <p className={classes.p}>{`Bio: ${data.bio}`}</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(GitHubCard);

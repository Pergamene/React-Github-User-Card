/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import lambdalogo from '../assets/lambdalogo.png';
import githublogo from '../assets/githublogo.png';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '50px',
  },
  img: {
    width: '150px',
    height: '150px',
  },
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img className={classes.img} src={lambdalogo} alt="Lambda Logo" />
        <p>❤️'s</p>
        <img className={classes.img} src={githublogo} alt="GitHub Logo" />
      </div>
    );
  }
}

export default withStyles(styles)(Header);

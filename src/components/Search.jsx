import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  item: {
    margin: '0 15px 30px',
    width: '200px',
  },
};

class Search extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} onSubmit={this.props.handleSearchSubmit}>
        <TextField className={classes.item} variant="outlined" label="Search" value={this.props.searchInput} onChange={this.props.handleSearchChange} />
        <Button className={classes.item} color="secondary" variant="contained" onClick={this.props.handleSearchClear}>Clear Search</Button>
      </form>
    );
  }
}

export default withStyles(styles)(Search);

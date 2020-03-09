import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header.jsx';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '50px auto',
    padding: '30px',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}

export default App;

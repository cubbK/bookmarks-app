import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Introduction = () =>
  <header>
    <Typography variant="display3" gutterBottom>
        Booky
    </Typography>
    <Typography variant="headline" gutterBottom>
        A place to store your bookmarks📚📚📚
    </Typography>
    <Button variant="contained" color="secondary" size="large">
        Log In With Google
    </Button>
  </header >

export default Introduction

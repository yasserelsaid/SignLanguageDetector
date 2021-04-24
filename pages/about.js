import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: { height: '70vh' },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <div className={classes.main}></div>
      </Box>
    </Container>
  );
}

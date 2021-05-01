import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '250px',
  },
});

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 25,
    borderRadius: 5,
  },
  colorPrimary: {
    // backgroundColor: '#000',
  },
  bar: {
    borderRadius: 5,
    // backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const progressBar = ({ progress }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant='determinate' value={progress * 100} />
    </div>
  );
};
export default progressBar;

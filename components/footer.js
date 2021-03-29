import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link href='/'>
        <a> SignLanguageDetector.com</a>
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Copyright />
    </div>
  );

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        {/* <Typography variant='h6' align='center' gutterBottom>
          {title}
        </Typography> */}
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Made By{' '}
          <a href='https://www.yasserelsaid.com/' target='_blank'>
            Yasser Elsaid
          </a>{' '}
          <a href='https://github.com/yasserelsaid' target='_blank'>
            Github
          </a>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

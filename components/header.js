import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& a': {
      color: 'white',
      textDecoration: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // display: 'none',
  },
  link: {
    paddingLeft: '20px',
  },
  tooltipContent: {
    fontSize: '14px',
    lineHeight: '17px',
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
          >
            <MenuIcon />
          </IconButton> */}

          <Typography className={classes.title} variant='h6' noWrap>
            <Link href='/'>
              <a>Sign Language Detector</a>
            </Link>
          </Typography>
          <Typography className={classes.link} variant='subtitle1' noWrap>
            <Link href='/detector'>
              <a>Detector</a>
            </Link>
          </Typography>
          <Typography className={classes.link} variant='subtitle1' noWrap>
            <Link href='/UNSDG'>
              <a>UNSDG</a>
            </Link>
          </Typography>
          <Typography className={classes.link} variant='subtitle1' noWrap>
            <Link href='/about'>
              <a>about</a>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

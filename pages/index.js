import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Detector from '../pages-sections/index/detector';

import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  container: {},

  main: { height: '60vh', background: '#273036', zIndex: '1' },
  img: {
    height: '500px',
    borderRadius: '20px',
    margin: '16px',
  },
  signup: {
    position: 'absolute',
    top: '35%',
    marginLeft: '20%',
    color: 'white',
    fontFamily: 'Poppins',
    zIndex: '1',
  },
  h1: {
    fontSize: '4em',
  },
  imgContainer: {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: { height: '200px', borderRadius: '10px' },
  iconContainer: {
    position: 'absolute',
    top: '38%',
    marginLeft: '6%',
  },
  btn: {
    '&:hover': {
      color: '#fff',
      background: theme.palette.primary.main,
      cursor: 'pointer',
    },
    background: 'white',
    border: 'none',
    padding: '16px',
    borderRadius: '25px',
  },
  landingImgContainer: {
    position: 'absolute',
    top: '28%',
    right: '8%',
    borderRadius: '25px',
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.signup}>
          <h1 className={classes.h1}>Sign Language Conversion</h1>
          <h1>Accessibility For All</h1>
          <Link href='/detector'>
            <a>
              <button className={classes.btn}>Access the Detector</button>
            </a>
          </Link>
        </div>
        <div className={classes.iconContainer}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/d/d4/Sustainable_Development_Goal_10.png'
            className={classes.icon}
          ></img>
        </div>
        <div className={classes.landingImgContainer}>
          <img src='/home_page_sign.png'></img>
        </div>
      </div>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#273036'
          fill-opacity='1'
          d='M0,320L60,293.3C120,267,240,213,360,170.7C480,128,600,96,720,117.3C840,139,960,213,1080,240C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
        ></path>
      </svg>
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src='https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ></img>
        <img
          className={classes.img}
          src='https://images.pexels.com/photos/4629634/pexels-photo-4629634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ></img>
        <img
          className={classes.img}
          src='https://images.pexels.com/photos/4629625/pexels-photo-4629625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ></img>
      </div>
    </div>
  );
}

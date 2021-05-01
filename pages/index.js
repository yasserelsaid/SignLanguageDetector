import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Detector from "../pages-sections/index/detector";

import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  container: {},

  main: {
    height: "75vh",
    background: "#273036",
    zIndex: "1",
    display: "flex",
    flexDirection: "row",
  },
  img: {
    height: "500px",
    borderRadius: "20px",
    margin: "16px",
  },
  signup: {
    width: "50%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    paddingTop: "10%",
    color: "white",
    fontFamily: "Poppins",
    zIndex: "1",
    marginBottom: "24px",
    height: "800px",
  },
  subtitle: {
    width: "60%",
    margin: "auto",

    paddingTop: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: "4em",
  },
  imgContainer: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: { height: "200px", borderRadius: "10px" },
  iconContainer: {
    margin: "auto",
  },
  btn: {
    "&:hover": {
      color: "#fff",
      background: theme.palette.primary.main,
      cursor: "pointer",
    },
    background: "white",
    border: "none",
    padding: "16px",
    borderRadius: "25px",
  },
  landingImgContainer: {
    width: "30%",
    marginTop: "auto",
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
          <Link href="/detector">
            <a>
              <button className={classes.btn}>Access the Detector</button>
            </a>
          </Link>
        </div>
        <div className={classes.landingImgContainer}>
          <img height="688" src="/home_page_sign.png"></img>
        </div>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,320L60,293.3C120,267,240,213,360,170.7C480,128,600,96,720,117.3C840,139,960,213,1080,240C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg> */}
      <div className={classes.subtitle}>
        <div className={classes.iconContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Sustainable_Development_Goal_10.png"
            className={classes.icon}
          ></img>
        </div>
        <h1>How can innovative technologies promote reduced inequalities?</h1>
        <p>
          Applications and software technologies have now become essential and
          our dependency on them is increasing exponentially each year. In this
          project, the student team will understand the knowledge, skills, and
          practices of web development and Machine Learning and get hands-on
          experience working with the intrinsic components (front-end, backend,
          system design, and the UI) of an infrastructure to gain insight on how
          software and applications work. The project team will then develop a
          machine learning based prototype for deaf and people who are hard of
          hearing, the model will help them in communicating effectively thereby
          cultivating EDI (Equity, Diversity & Inclusivity) in society.
        </p>
      </div>
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src="https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ></img>
        <img
          className={classes.img}
          src="https://images.pexels.com/photos/4629634/pexels-photo-4629634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ></img>
        <img
          className={classes.img}
          src="https://images.pexels.com/photos/4629625/pexels-photo-4629625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        ></img>
      </div>
    </div>
  );
}

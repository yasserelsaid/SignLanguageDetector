import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: { fontSize: "70px", color: "white", marginTop: "0", padding: "10%" },
  main: {
    height: "100vh",
  },
  top: {
    width: "100%",
    height: "40%",
    backgroundColor: "#273036",
  },
  card: {
    backgroundColor: "black",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    margin: "10px",
  },
  cardContainer: {
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  team: {
    border: "10px black solid",
  },
  padding: {
    padding: "10%",
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.top}>
        <h1 className={classes.title}>About Us</h1>
      </div>
      <div className={classes.padding}>
        <div className={classes.vision}>
          <h1 className={classes.header}>Our Vision</h1>
          <p className={classes.paragraph}> </p>
        </div>
        <div className={classes.team}>
          <h1 className={classes.header}>Our Team</h1>
          <p className={classes.paragraph}></p>
          <div className={classes.cardContainer}>
            <div className={classes.card}>
              <img></img>
              <p>Name</p>
            </div>
            <div className={classes.card}>
              <img></img>
              <p>Name</p>
            </div>
            <div className={classes.card}>
              <img></img>
              <p>Name</p>
            </div>
            <div className={classes.card}>
              <img></img>
              <p>Name</p>
            </div>
            <div className={classes.card}>
              {" "}
              <img></img>
              <p>Name</p>
            </div>
            <div className={classes.card}>
              {" "}
              <img></img>
              <p>Name</p>
            </div>
          </div>
        </div>
        <div className={classes.how}>
          <h1 className={classes.header}>How we engineered our solution</h1>
          <p className={classes.paragraph}></p>
        </div>
      </div>
    </div>
  );
}

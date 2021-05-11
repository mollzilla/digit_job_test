import React from "react"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import styles from "./DigitImageContainer.module.scss"

import ThumbnailCard from "@components/ThumbnailCard"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

export default function BasicButtonGroup() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        {" "}
        {/* Thought of using tabs but decided not to modify original assignment */}
        <Button>BUTTON ONE</Button>
        <Button>BUTTON TWO</Button>
        <Button>BUTTON THREE</Button>
      </ButtonGroup>

      <section className={styles.main_image}>
        <img src="https://place-puppy.com/900x500" />
      </section>

      <Grid container>
        <Grid item md={4}>
          <ThumbnailCard />
        </Grid>
        <Grid item md={4}>
          <ThumbnailCard />
        </Grid>
        <Grid item md={4}>
          <ThumbnailCard />
        </Grid>
      </Grid>
    </div>
  )
}

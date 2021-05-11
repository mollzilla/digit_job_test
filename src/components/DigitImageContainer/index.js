import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import styles from "./DigitImageContainer.module.scss"
import ThumbnailCard from "@components/ThumbnailCard"

import { puppies } from "../../puppies_data.js"
console.log(puppies)

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

export default function DigitImageContainer() {
  const [activePuppy, setActivePuppy] = useState(0)

  const classes = useStyles()
  {
    /* using inline styles considering the small scope of the exercise */
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        style={{ justifyContent: "space-between" }}
      >
        {/* Thought of using tabs but decided not to modify original assignment */}
        {puppies.map((puppy, i) => (
          <Grid item xs={12} sm={4} style={{display: "flex", justifyContent: "center"}}>
            <Button
              sm={12}
              md={4}
              variant="contained"
              color="primary"
              onClick={() => setActivePuppy(i)}
            >
              {puppy.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <section className={styles.main_image}>
        <h2>You have selected {puppies[activePuppy].name}!</h2>
        <img src={puppies[activePuppy].image} />
      </section>

      <Grid container spacing={4}>
        {puppies.map((puppy, i) => (
          <Grid item md={4} onClick={() => setActivePuppy(i)}>
            <ThumbnailCard {...puppy} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

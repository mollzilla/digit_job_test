import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function MainImage() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://place-puppy.com/300x300"
          title="Cute puppy No. 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Puppy No. 1.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Risotto is a super active yet cuddly puppy suitable for children. Needs large garden.
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Select!
        </Button>
      </CardActions>
    </Card>
  );
}

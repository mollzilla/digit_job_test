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
    cursor: "pointer"
  },
  media: {
    height: 200,
    width: 300
  },
});

export default function ThumbnailCard({name, image, description}) {
  const classes = useStyles();
console.log(image)
  return (
    <Card className={classes.root}>
      {/* material ui cards and gatsby routing don't get along. Decided to go for the fast option and research for more elegant solutions later */}
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
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

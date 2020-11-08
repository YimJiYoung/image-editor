import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

const MediaCard = (props) => {
  const classes = useStyles();
  const { title, onClick } = props;

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.vlpt.us/post-images/public_danuel/f6564fd0-61b4-11e9-bf0a-7575a906d2e9/thumbnail16x.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;

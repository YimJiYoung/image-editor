import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

const NewCard = (props) => {
  const classes = useStyles();

  return (
    <Link to="/editor">
      <Card className={classes.root}>
        <CardContent>
          <Typography> + 새로운 프로젝트 생성</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewCard;

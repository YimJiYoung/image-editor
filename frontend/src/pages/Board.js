import React from 'react';
import { withRouter } from "react-router";
import Container from '@material-ui/core/Container';
import MediaCard from '../components/board/Card';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    background: 'white',
    marginTop: '40px',
  },
}))

const Board = ({ history }) => {
    const classes = useStyles()
    const handleClick = () => {
      history.push('editor');
    }

    return (
        <Container maxWidth="lg" className={classes.container}>
            <MediaCard title="title" onClick={handleClick}/>
            <MediaCard/>
            <MediaCard/>
        </Container>
    );
};

export default withRouter(Board);
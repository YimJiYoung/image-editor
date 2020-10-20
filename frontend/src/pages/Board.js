import React from 'react';
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

const Board = () => {
    const classes = useStyles()
    return (
        <Container maxWidth="lg" className={classes.container}>
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
        </Container>
    );
};

export default Board;
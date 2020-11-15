import React, { useState, useEffect } from 'react';
import { SignApi } from '../utils/api';
import { useHistory } from 'react-router-dom';
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
    const [ projects, setProjects] = useState([]);
    const history = useHistory();

    const handleClick = () => {
      history.push('editor');
      // window.location.href = '/#/editor';
    }

    useEffect(() => {
      const getInitialData = async () => {
        const { projects } = await SignApi('http://localhost:9000/projects', { method: 'GET'})
        setProjects(projects);
      }
      getInitialData();
    }, []);


    return (
        <Container maxWidth="lg" className={classes.container}>
             { projects.map(({ id, name, imageUrl}) =>  
              <MediaCard key={id} title={name} imageUrl={imageUrl} onClick={handleClick}/>)}
        </Container>
    );
};

export default Board;
import React, { useState, useEffect, useContext } from 'react';
import { SignApi } from '../utils/api';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import MediaCard from '../components/board/Card';
import { makeStyles } from "@material-ui/core/styles"
import userContext from '../utils/context';

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
    const { data, setData } = useContext(userContext);
    const history = useHistory();

    const handleClick = (imageUrl) => {
      history.push('editor');
      setData({ ...data, editingImageUrl: imageUrl});
    }

    const getInitialData = async () => {
      const { projects } = await SignApi('http://localhost:9000/projects', { method: 'GET'})
      setProjects(projects);
    }
    
    useEffect(() => {
      getInitialData();
    }, []);


    return (
        <Container maxWidth="lg" className={classes.container}>
             { projects.map(({ id, name, imageUrl}) =>  
              <MediaCard key={id} title={name} imageUrl={imageUrl} onClick={() => handleClick(imageUrl)}/>)}
        </Container>
    );
};

export default Board;
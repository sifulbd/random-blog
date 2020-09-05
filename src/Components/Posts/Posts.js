import React, {useEffect, useState} from 'react';
import MediaCard from '../MediaCard/MediaCard';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

function Posts() {
    const classes = useStyles();
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(() => {
        fetch(postsUrl)
        .then(setLoading(true))
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
        .then( setTimeout => { setLoading(false)}, 2000)
    }, []);

    if(loading) {
        return (
        <div className="center-align">
            <h2>Loading...</h2>
        </div>)
    }

    return (
        <div className={classes.root}>
            <Container fixed>
                <Grid container spacing={3}> 
                    {posts.map(item => 
                        <Grid key={item.id} item xs={4}>                        
                            <MediaCard id={item.id} item={item}></MediaCard>                        
                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    )
}

export default Posts;

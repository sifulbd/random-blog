import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../MediaCard/MediaCard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    media: {
        maxWidth: 800
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function PostDetails() {
    const classes = useStyles();
    const [fullPost, setFullPost] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    let { keyId } = useParams();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${keyId}`;
        fetch(url)
        .then(setLoading(true))
        .then(res => res.json())
        .then(data => setFullPost(data))
        .then(setTimeout => { setLoading(false)}, 3000)
        .catch(error => console.log(error))
    }, []);
    
    useEffect(() => {
        const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${keyId}`;
        fetch(url2)
        .then(res => res.json())
        .then(data => setComments(data))
        .then(setTimeout => { setLoading(false)}, 1000)
        .catch(error => console.log(error))
    }, []);
    

    const img = `https://picsum.photos/id/${keyId}/1300/500`;
    
    if(loading) {
        return (
        <div className="center-align">
            <h2>Loading...</h2>
        </div>)
    }

    return (
        <div style={{marginTop: '20px'}} className={classes.root}>
            <Container fixed>
                <Card className={classes.root}>
                    <CardActionArea>
                        <img src={img ? img : ''} alt=""/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {fullPost.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {fullPost.body}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <div className="comments">
                <h2>Total {comments.length} comments </h2>
                    {comments.map(ct =>
                        <Comments ct={ct} key={ct.id}></Comments>
                    )}
                </div>
            </Container>
           
        </div>
    )
}

export default PostDetails;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';

import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    marginTop: '20px'
  },
  media: {
    height: 250,
  },
});

export default function MediaCard({item}) {
  const classes = useStyles();
  const {title, id, body} = item;
  return (
      <Card className={classes.root}>
        <CardActionArea className='cardItem'>
          <CardMedia
            className={classes.media}
            image= {`https://picsum.photos/id/${id}/200/300`}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>        
          <Link to={`/post/${id}`}>
            <Button>
                  Read More
            </Button>
            </Link>           
        </CardActions>
      </Card>
  );
}

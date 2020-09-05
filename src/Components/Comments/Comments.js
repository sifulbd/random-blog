import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '50ch',
        marginTop: '30px',
        backgroundColor: theme.palette.background.paper,
        },
        MuiListItemAvatar: {
            minWidth: '90px',
            flexShrink: 0
        },
        inline: {
        display: 'inline',
        },
    }));

    
    export default function Comments({ct}) {
        const classes = useStyles();
        const [comments2, setComments2] = useState([]);

        useEffect(() => {
            const url3 = `https://randomuser.me/api/?results=2`;
            fetch(url3)
            .then(res => res.json())
            .then(data => setComments2(data.results))
            .catch(error => console.log(error))
        }, []);


        const img = `https://picsum.photos/id/${ct.id}/1300/500`;
        const img2 = `https://randomuser.me/api/portraits/women/${ct.id}.jpg`;


        return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={ct.name}  src={img2 ? img2 : ''} />
            </ListItemAvatar>
            <ListItemText
                primary={ct.email}
                secondary={
                <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                    {ct.name}
                    </Typography>
                    {ct.body}
                </React.Fragment>
                }
            />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
        );
    }
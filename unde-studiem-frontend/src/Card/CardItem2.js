import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './CardItem.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function CardItem2(props) {
  const classes = useStyles();

  return (
    <div className='CardItem2'>

      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="/toca.jpg"
          title={props.item.name}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.item.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <Button aria-label="previous">
              ceva
            </Button>
            <Button aria-label="play/pause">
              ceva
            </Button>
            <Button aria-label="next">
              ceva
            </Button>
          </div>
        </div>
      </Card>

      {/* <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/toca.jpg"
            title={props.item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Descriere bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              bla bla bla bla bla bla bla 
              bla bla bla bla bla bla bla 
              bla bla bla bla bla bla bla 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card> */}
    </div>

  );
}

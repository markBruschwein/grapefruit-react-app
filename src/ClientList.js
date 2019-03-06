import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';


//Is the coach list a list of all coaches available? 
//or a list of the logged in users coaches

//If its a list of all coaches available
//make componentDidMount makes an axios.get call to the backend. 
//backend route is going to filter through and return all users that are coaches.
//populate the images const set below with those coaches information
//make a function that routes to a "profile page" for that user

//or

//if its a list of the logged in users coaches
// this requires a seperate relationship database
//make call to backend to filter through relationship table and find our user returning the coaches that have a relationship with us
// populate the images with those coaches
// make a function to route to either a profile page or messaging


const styles = theme => ({

  button: {
    margin: theme.spacing.unit,
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});


class ButtonBases extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      anchorEl: null,
      clients: [{
        url: '/static/images/grid-list/breakfast.jpg',
        title: 'Client 1',
        width: '30%',
        id: 1,
      },
      {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Client 2',
        width: '30%',
        id: 2,
      },
      {
        url: '/static/images/grid-list/camera.jpg',
        title: 'Client 3',
        width: '30%',
        id: 3,
      },
      ]
    };

    this.directToUserLandingPage = this.directToUserLandingPage.bind(this)
    this.handleRemoveClient = this.handleRemoveClient.bind(this)
  }

  handleRemoveClient(id) {
    console.log(id)

  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  directToUserLandingPage() {
    this.props.history.push("/user/home");
  }
  render() {
    const { classes } = this.props;
    const { clients } = this.state;
    console.log(clients)
    return (
      <div className="CoachList">

        <div className={classes.root}>
          {clients.map(image => (
            <>
              <ButtonBase
                onClick={this.directToUserLandingPage}
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                  <DeleteIcon className={classes.rightIcon} />
                
                </span>
              </ButtonBase>
              {/* <Paper style={{ padding: 3, margin: 3, textAlign: 'center' }}>
                <Button id={image.id} onClick={() => this.handleRemoveClient(image.id)} variant="outlined" color="none">
                  Remove
             </Button>
              </Paper> */}
           
              {/* <Button variant="contained" color="primary" className={classes.button}></Button> */}
              {/* <Button id={image.id} onClick={() => this.handleRemoveClient(image.id)} variant="outlined" color="primary" className={classes.button}>
                Delete
               <DeleteIcon className={classes.rightIcon} />
              </Button> */}
            

            </>
          ))}

        </div>
           <Paper style={{ padding: 3, margin: 3, textAlign: 'center' }}>
                <Button variant="outlined" color="none">
                  Add
                  </Button>
              </Paper>
      </div>
    );
  }
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ButtonBases));
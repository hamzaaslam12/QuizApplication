import React, {useState , useEffect} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));



const Result = () => {
                    // console.log(props)
          const [user, setUser] = useState('');
          const classes = useStyles();        

          useEffect(() => {

            let currentUser = firebase.auth().currentUser
            if(currentUser){
              
              // console.log(currentUser.email)
              firebase.database().ref().on('child_added', (data) => {
                // console.log(data.val())
                let users = data.val()
                
                if(currentUser.email === users.email){
                  setUser(users)
                }
                else {}
              })
            }
            else{
              // console.log('user not sign in')
            }
            
          }, [])

          return (
                    <div>
                              {/* <h4>RESULT</h4>
          <h6>First Name: {user.firstName}</h6>
          <h6>Second Name: {user.lastName}</h6>
          <h6>Email: {user.email}</h6>
          <h6>Your score: {user.score}</h6> */}
                
{/* Card */}

<Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            U
          </Avatar>
        }
        title={user.firstName + user.lastName}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          EMAIL: {user.email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Your score: {user.score}
        </Typography>
      </CardContent>
    </Card>



                    </div>
          );
}
 
export default Result;
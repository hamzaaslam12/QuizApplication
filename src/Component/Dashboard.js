import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const Dashboard = () => {
          const [qust, setQust] = useState([
            {id:1, Q:'2 + 2', A: '3', B:'4', C:'5'}, 
            {id:2, Q:'12 + 12', A: '23', B:'24', C:'25'}, 
            {id:3, Q:'22 + 22', A: '43', B:'44', C:'45'}, 
          ])    
          
          const classes = useStyles();
          const [value, setValue] = useState('');
          const [error, setError] = useState(false);
          const [helperText, setHelperText] = useState('Choose wisely');
          const [score, setScore] = useState(0);
          const [index, setIndex] = useState(0);
          const [userUID, setUserUID] = useState('')
          const history = useHistory();

useEffect(() => {

  let currentUser = firebase.auth().currentUser
  if(currentUser){

    // console.log(currentUser.email)
    firebase.database().ref().on('child_added', (data) => {
      // console.log(data.val())
      let users = data.val()
      
      if(currentUser.email === users.email){
        console.log(users.uid, ' is match')
        setUserUID(users.uid)
      }
      else {}
    })
  }
  else{
    // console.log('user not sign in')
  }
}, [])



          const handleRadioChange = (event) => {
            setValue(event.target.value);
            setHelperText(' ');
            setError(false);
          };
        
          const handleNext = (event) => {
            event.preventDefault();
            if(index <= 2) {
              // console.log("small")
              if (value === qust[index].B) {
                // setHelperText('You got it!');
                setError(false);
                setScore(score + 1)

                firebase.database().ref().child(userUID).update({score: score + 1})
                console.log(score)


                setIndex(index + 1)
              } else if (value === qust[index].A || value === qust[index].C ) {
                // setHelperText('Sorry, wrong answer!');
                setError(true);
                setIndex(index + 1)

              } else {
                setHelperText('Please select an option.');
                setError(true);
              }  
            } else{
               history.push("/result")
              }
          }
          return ( 
            <div>
                    <h2>HELLO HAMZA</h2>

{/* MATERIAL ui */}
{/* {qust.map(items => ( */}

{index < 3 ? (

<div key={qust[index].id}>
<form>
  <FormControl component="fieldset" error={error} className={classes.formControl}>
      <FormLabel component="legend">{qust[index].Q}</FormLabel>
      <RadioGroup aria-label={qust[index].Q} name={qust[index].Q} value={value} onChange={handleRadioChange}>
      <FormControlLabel value={qust[index].A} control={<Radio />} label={qust[index].A} />
      <FormControlLabel value={qust[index].B} control={<Radio />} label={qust[index].B} />
      <FormControlLabel value={qust[index].C} control={<Radio />} label={qust[index].C} />
    </RadioGroup>
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>

  <br />
  <Button id={qust[index].id} type="submit" variant="outlined" color="primary" className={classes.button} 
  onClick={handleNext}>
      NEXT
    </Button>
</form>
    </div>


) : history.push('/result')
}

  {/* <div key={qust[index].id}>
    <form>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
          <FormLabel component="legend">{qust[index].Q}</FormLabel>
          <RadioGroup aria-label={qust[index].Q} name={qust[index].Q} value={value} onChange={handleRadioChange}>
          <FormControlLabel value={qust[index].A} control={<Radio />} label={qust[index].A} />
          <FormControlLabel value={qust[index].B} control={<Radio />} label={qust[index].B} />
          <FormControlLabel value={qust[index].C} control={<Radio />} label={qust[index].C} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>

      <Button id={qust[index].id} type="submit" variant="outlined" color="primary" className={classes.button} 
      onClick={handleNext}>
          NEXT
        </Button>
    </form>
        </div> */}
        {/* ))} */}
        
        {/* <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Check Answer
        </Button> */}
        
        
        </div> 
        )}
        
export default Dashboard;
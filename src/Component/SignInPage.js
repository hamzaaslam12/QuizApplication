import React,{useState, useEffect} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Result from './Result';

// create the account
const SignIn = () => {
          const [firstName, setFirstName] = useState('o');
          const [lastName, setLastName] = useState('o');
          const [email, setEmail] = useState('oo@oo.com');
          const [password, setPassword] = useState('11111111');
          const [uid, setUid] = useState();
          const [score, setScore] = useState(0);
          const history = useHistory();

useEffect(() => {
  let key = new Date().getMilliseconds()
  setUid(key)
}, [])

          const createUser = () => {
                    let obj = {firstName, lastName, email, password, uid, score};
                    firebase.database().ref().child(uid).set(obj)
.then(() => {

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => history.push('/loginpage'))
  .catch((err) => console.log(err.message))

})
.catch(err => console.log(err.message))
}

          return ( 
          <div>
                    <h4>FIREBASE AUTH</h4>
          <TextField
          id="firstName"
          label="First Name"
          type="text" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}  
        />
        <br />
          <TextField
          id="lastName"
          label="Last Name"
          type="text"   
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}  

/>
        <br />
          <TextField
          id="email"
          label="Email"
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}  
  
        />
        <br />
          <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  

        />
        <br />
          <TextField
          id="rePassword"
          label="Re-type Password"
          type="password"
        />
        <br />
        <br />
        
<Button variant="outlined" color="secondary" onClick={createUser}>
  Sign In
</Button>

        
          </div> 
          );
}
 
export default SignIn;
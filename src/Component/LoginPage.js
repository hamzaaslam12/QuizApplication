import React,{useState, useEffect} from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


const LoginPage = () => {

          const [email, setEmail] = useState('oo@oo.com');
          const [password, setPassword] = useState('11111111');
          const history = useHistory();

const loginUser = () => {
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => history.push('/dashboard'))
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
          });
        }

          return ( 
                    <div>
                              <h3>LOGIN PAGE</h3>
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

<Button variant="outlined" color="primary" onClick={loginUser}>
  Login
</Button>


                    </div>
           );
}
 
export default LoginPage;
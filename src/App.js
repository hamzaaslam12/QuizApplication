import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from  './Component/Dashboard';
import './App.css';
import SignIn from './Component/SignInPage';
import Result from './Component/Result';
import NotFound from './Component/NotFoundPage';
import LoginPage from './Component/LoginPage';

function App() {
  return (
<Router>
<div className="App">
      <h2>HELLO WORLD</h2>
      <Switch>
        <Route exact path="/">
        <SignIn />
        </Route>
        <Route path="/loginpage">
        <LoginPage />
        </Route>
        <Route path="/dashboard">
        <Dashboard />
        </Route>
        <Route path="/result">
        <Result />
        </Route>
        <Route path="*">
        <NotFound />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

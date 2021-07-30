import './App.css';
import Header from './components/layouts/Header';
import Home from './components/Home';
import FormElements from './components/FormElements';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      < Header />
      <Switch>
        <Route path="/form-elements">
          <FormElements />
        </Route>
        <Route path="/">
          <Home />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;

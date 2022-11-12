import logo from './logo.svg';
import Homepage from './components/homepage';
import HomepageOn from './components/homepageOn';
import ScootersPage from './components/scootersPage';
import BikesPage from './components/bikesPage';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <BikesPage/>
    </div>
  );
}

export default App;

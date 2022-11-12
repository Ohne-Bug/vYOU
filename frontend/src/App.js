import logo from './logo.svg';
import Homepage from './components/homepage';
import HomepageOn from './components/homepageOn';
import ScootersPage from './components/scootersPage';
import BikesPage from './components/bikesPage';
import QuizPage from "./components/quizPage";
import { BrowserRouter as Router, Routes,
  Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />

          <Route path="/on" element={<HomepageOn/>} />

          <Route path="/scooters-page" element={<ScootersPage/>} />

          <Route path="/bikes-page" element={<BikesPage/>} />

          <Route path="/quiz-page" element={<QuizPage/>} />

          {/* <Navigate to="/" /> */}
        </Routes>
      </Router>
      {/* <BikesPage/> */}
    </div>
  );
}

export default App;

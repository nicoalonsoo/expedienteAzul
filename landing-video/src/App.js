import axios from "axios";
import './App.css';
import { Route } from 'react-router-dom';
import LandingVideo from './views/LandingVideo/LandingVideo';
import ViewCalendly from "./views/viewCalendly/viewCalendly";

axios.defaults.baseURL = 'https://expedienteazul-production.up.railway.app';
// https://expedienteazul-production.up.railway.app
// http://localhost:3001
function App() {
  return (
    <div className="App ">
      <Route exact path="/" component={LandingVideo} />
      <Route exact path="/viewcalendly" component={ViewCalendly} />
    </div>
  );
}

export default App;

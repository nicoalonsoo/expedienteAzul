import axios from "axios";
import './App.css';
import { Route } from 'react-router-dom';
import LandingVideo from './views/LandingVideo/LandingVideo';
import LandingForm from './views/LandingForm/LandingForm';
import UserTable from './views/UserTable/UserTable'
import Unsubscribe from './views/Unsubscribe/Unsubscribe'
axios.defaults.baseURL = 'http://localhost:3001';
function App() {
  return (
    <div className="font-roboto App ">
      <Route exact path="/video" component={LandingVideo} />
      <Route exact path="/" component={LandingForm} />
      <Route exact path="/usertable" component={UserTable} />
      <Route exact path="/unsubscribe" component={Unsubscribe} />
    </div>
  );
}

export default App;

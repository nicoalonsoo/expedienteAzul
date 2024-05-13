import axios from "axios";
import './App.css';
import { Route } from 'react-router-dom';
import UserTable from './view/UserTable/UserTable'
axios.defaults.baseURL = 'http://localhost:3001';
// https://expedienteazul-production.up.railway.app
// http://localhost:3001
function App() {
  return (
    <div className="font-roboto App ">
      <Route exact path="/usertable" component={UserTable} />
    </div>
  );
}

export default App;

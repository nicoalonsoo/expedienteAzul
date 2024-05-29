import axios from "axios";
import { useEffect } from "react";
import './App.css';
import { Route } from 'react-router-dom';
import LandingVideo from './views/LandingVideo/LandingVideo';
import LandingForm from './views/LandingForm/LandingForm';
import UserTable from './views/UserTable/UserTable'
import Unsubscribe from './views/Unsubscribe/Unsubscribe'
import ViewCalendly from "./views/viewCalendly/viewCalendly";
import TagManager from 'react-gtm-module'
axios.defaults.baseURL = 'https://expedienteazul-production.up.railway.app';
// https://expedienteazul-production.up.railway.app
// http://localhost:3001
const tagManagerArgs = {
  gtmId: 'GTM-PJ54S8JC'
}
function App() {

// useEffect(() => {
//   TagManager.initialize(tagManagerArgs)
//   // Enviar evento de pageview en el efecto de montaje
//   TagManager.dataLayer({
//     event: 'pageview',
//     // Puedes agregar datos adicionales aquí (opcional)
//   })
// }, [])

  return (
    <div className="App ">
      <Route exact path="/video" component={LandingVideo} />
      <Route exact path="/" component={LandingForm} />
      <Route exact path="/usertable" component={UserTable} />
      <Route exact path="/unsubscribe" component={Unsubscribe} />
      <Route exact path="/viewcalendly" component={ViewCalendly} />
    </div>
  );
}

export default App;

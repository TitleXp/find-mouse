import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";


import NavBar from "./component/NavBar";
import LandingPage from "./component/LandingPage";




function App() {
  return (
    <div>
      <NavBar />

      <Switch>

        <Route exact path="/home">
          <LandingPage />
        </Route>
    


        
      </Switch>

    </div>
  );
}

export default App;

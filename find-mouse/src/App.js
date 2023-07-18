import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";


import NavBar from "./component/NavBar";
import LandingPage from "./component/LandingPage";
import SignUp from "./component/SignUp";
import Login from "./component/Login";


function App() {
  return (
    <div>
      <NavBar />

      <Switch>

        <Route exact path="/home">
          <LandingPage />
        </Route>

        <Route exact path="/login">
          <Login />
          <SignUp />
        </Route>
    


        
      </Switch>

    </div>
  );
}

export default App;

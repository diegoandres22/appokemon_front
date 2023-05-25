import "./App.css";

import { Route, useLocation } from "react-router-dom";
import { Landing, Form, Home, DetailCont } from "./views";
import NavBar from "./components/NavBar/NavBar";
import ViewPoke from "./views/ViewPoke/ViewPoke"

function App() {

  const location = useLocation();


  return (
    <div className="app">

      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/form">
        <Form />
      </Route>

      <Route path="/detail/:id">
        <DetailCont />
      </Route>

      <Route path="/detailbyname">
        <ViewPoke/>
      </Route>
    </div>
  );
}

export default App;

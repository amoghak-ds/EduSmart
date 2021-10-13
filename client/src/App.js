import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import io from "socket.io-client";

import {
  AnimalCellExplore,
  Boeing777Explore,
  TurbofanExplore
} from "./components/3DExplore";

import AeroSpace from "./components/AeroSpace";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import Medical from "./components/Medical";
import Planets from "./components/Planets";

import Contributors from "./pages/Contributors";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Chatroom from "./pages/Chatroom";
import Classroom from "./pages/Classroom";
import LoginPage from "./pages/Login";
// import Footer from './components/Footer';
const socket = io.connect("/");
socket.on("connect", function() {
  console.log(socket.id);
});

function App() {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/" exact component={LoginPage} />{" "} */}
          <div
            className="font-serif select-none	bg-primary flex"
            // onClick={() => {
            //   setOnHover(!onHover);
            // }}
          >
            <Navbar onHover={onHover} setOnHover={setOnHover} />
            <div className="w-5/6 mx-auto">
              <Route path="/login" exact component={LoginPage} />

              <Route path="/" exact component={About} />
              <Route path="/home" exact component={Home} />
              {/* <Route path="/chat" exact component={Chat} /> */}

              {/* <Route path="/chat" exact component={Chatroom} /> */}
              <Route exact path="/chatroom">
                <Chatroom socket={socket} />
              </Route>
              <Route exact path="/chat">
                <Chat socket={socket} />
              </Route>
              <Route path="/classroom" exact component={Classroom} />
              <Route path="/medical" exact component={Medical} />
              <Route
                path="/animalCellExplore"
                exact
                component={AnimalCellExplore}
              />
              <Route
                path="/boeing777Explore"
                exact
                component={Boeing777Explore}
              />
              <Route
                path="/turbofanExplore"
                exact
                component={TurbofanExplore}
              />
              <Route path="/aerospacePage" exact component={AeroSpace} />
              <Route path="/contributors" exact component={Contributors} />
              <Route path="/Planets" exact component={Planets} />
              <Chatbot />
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;

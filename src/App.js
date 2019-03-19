import React, { Component } from "react";
import "./App.css";
import UserLandingPage from './UserLandingPage';
import CoachLandingPage from './CoachLandingPage';
import ClientList from "./ClientList";
import Login from "./Login";
import Register from "./Register";
import "./index.css";
import MacroList from './MacroList';
import CoachWorkoutSelector from './CoachWorkoutSelector';
import WorkoutList from './WorkoutList'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9242f4",
      main: "#8FBF1A", // green* "8FBF1A",slate blue #607D8B, orange/red "dd4b39", green #24AF9E
      dark: "#1613FF", //bright blue
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#1613FF",
      main: "#1613FF",  //#1D14BF, grey 5B7DFF
      dark: "#1613FF",
      contrastText: "FFFFFF"
    },
    button: {
      backgroundColor: "#1613FF", //light grey
      textColor: "FFFFFF",
      height: 50,
      width: 100,
      // borderRadius: 55,
      opacity: 50,
      
    }
  }
});


class App extends Component {

  handleClick = event => {

  }

  render() {
    return (
      <Router>
        <div>
          <MuiThemeProvider theme={theme}>
            <NavBar />
            <div className="content">
              <Route exact path="/" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/coach/clientlist" component={ClientList} />
              {/* <Route path="/client/coachlist" component={CoachList} /> */}
              <Route path="/coach/client/:id/workout" component={WorkoutList} />
              <Route path="/MacroList" component={MacroList} />
              <Route path="/coachworkoutselector" component={CoachWorkoutSelector} />
              {/* <Route path="/messageboard" component={MessageBoard}/> */}
              <Route path="/client" component={UserLandingPage} />
              <Route exact path="/coach/client/:id" component={CoachLandingPage} />
            </div>
          </MuiThemeProvider>
        </div>
        </Router>
    );
  }
}

export default App;

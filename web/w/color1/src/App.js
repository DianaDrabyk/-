import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Welcome from './components/Welcome';
import Question1 from './components/Questions/Question1';
import Question2 from './components/Questions/Question2';
import Question3 from './components/Questions/Question3';
import Question4 from './components/Questions/Question4';
import Question5 from './components/Questions/Question5';
import Question6 from './components/Questions/Question6';
import Question7 from './components/Questions/Question7';
import Question8 from './components/Questions/Question8';
import Finish from './components/Finish';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Welcome /> },
    { path: "/question1", element: <Question1 /> },
    { path: "/question2", element: <Question2 /> },
    { path: "/question3", element: <Question3 /> },
    { path: "/question4", element: <Question4 /> },
    { path: "/question5", element: <Question5 /> },
    { path: "/question6", element: <Question6 /> },
    { path: "/question7", element: <Question7 /> },
    { path: "/question8", element: <Question8 /> },
    { path: "/finish", element: <Finish /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <div className="container">
        <App />
      </div>
    </Router>
  );
};

export default AppWrapper;
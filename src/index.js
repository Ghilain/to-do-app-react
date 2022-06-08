import React from 'react';
import ReactDOM from 'react-dom';
//react router
import { BrowserRouter as Router } from "react-router-dom"
// component file
import TodoContainer from "./functionBased/components/TodoContainer"
// style
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
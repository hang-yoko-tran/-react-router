import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link } 
  from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Candidates from './pages/CandidatesPage';
import Company from './pages/CompanyPage';
import NavBar from './components/NavBar'
import CandidatePage from './pages/CandidatePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/homepage" exact component={HomePage} />
      <Route path="/candidates" exact component={Candidates} />
      <Route path="/company" exact component={Company} />
      <Route path="/candidatepage/:" exact component={CandidatePage} />
      </Switch>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
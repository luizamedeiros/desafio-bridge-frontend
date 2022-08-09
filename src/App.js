import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';

function App() {
return(
  <>
  <ul>
    <li><a href='http://localhost:3000/'>Home</a></li>
    <li className='headerText'> desafio bridge_ </li>
    <li><a href='http://localhost:3000/history'>History</a></li>
  </ul>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/history" element={<History/>}/>
    </Routes>
  </Router>
  </>
);
}

export default App;

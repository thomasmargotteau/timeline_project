import Navbar from './Composants/Navbar';
import './App.css'
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreerEvent from './Pages/CreateEvent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/create" element = {<CreerEvent/>}/>
            <Route path="/delete" element = {<h1>hello</h1>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

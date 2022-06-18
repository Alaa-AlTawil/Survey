import './App.css';
import Header from './components/Header';
import Surveys from './components/Surveys';
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

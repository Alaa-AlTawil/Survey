import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import User from './components/User'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route> 
        <Route path="/user" element={<User/>}></Route> 
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import User from './components/User'
import Questions from './components/Questions'
import AddSurvey from './components/AddSurvey'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route> 
        <Route path="/user" element={<User/>}></Route> 
        <Route path="/home/addsurvey" element={<AddSurvey/>}></Route>
        <Route path="/questions" element={<Questions/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

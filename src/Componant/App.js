import './App.css';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Project from '../Pages/Project'; 
import About from '../Pages/About'
import Error from '../Pages/Error';
import Contact from '../Pages/Contact'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;

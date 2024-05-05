
import { Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';



function App() {
  return (
    <div className='App'>
      

      <NavBar/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>

    </div>
  );
}

export default App;

// import logo from './logo.svg';
import react, { useState }  from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  
  const [mode , setMode] = useState('dark');
 const toggleMode= ()=>{
  if(mode ==='light'){
    setMode('dark');
  }
  else
  {
    setMode('light');
  }
  }
  return (
  <>

  <Navbar title="Home"  mode={mode} toggleMode={toggleMode}/>
  {/* <Alert alert = " This is a primary alert—check it out!" /> */}
  <div className="container">
  < TextForm heading="Enter the Text "/>
  <About about = "About-Us" />
  </div>


  </>
  );
}

export default App; 

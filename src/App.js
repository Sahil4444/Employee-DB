import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Update from './components/Update';
import Edit from './components/Edit';
import { useState } from 'react';

function App() {
  const[mode, setMode] = useState("light");
  const[modeText, setModeText] = useState("Enable dark mode");

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setModeText('Disable dark mode');
      document.body.style.backgroundColor = '#212529';
      // document.body.style.color = '#fff';
    }else{
      setMode('light');
      setModeText('Enable dark mode');
      document.body.style.backgroundColor = '#fff';
      // document.body.style.color = 'black';
    }
  }
  return (
    <div className="App">
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Routes>
          <Route path='/Employee-DB' element={<Home mode={mode} toggleMode={toggleMode} modeText={modeText} />} />
          <Route path='/update' element={<Update />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;

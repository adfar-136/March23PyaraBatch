import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/pages/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

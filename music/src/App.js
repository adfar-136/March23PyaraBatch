import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/pages/Home';
import Signup from './Components/pages/Signup';
import UserProvider from './Components/provider/UserProvider';
import SignIn from './Components/pages/SignIn';
import { MusicProvider } from './Components/provider/MusicProvider';
import MusicPlayer from './Components/music/MusicPlayer';

function App() {
  return (
    
    <div className='App' style={{marginTop:"85px",backgroundColor:"gray"}}>
      <UserProvider>
        <MusicProvider>
        <BrowserRouter>
        <MusicPlayer/>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>
       </Routes>
      </BrowserRouter>
        </MusicProvider>
      
      </UserProvider>
      
    </div>
  );
}

export default App;

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/pages/Home';
import Signup from './Components/pages/Signup';
import UserProvider from './Components/provider/UserProvider';
import SignIn from './Components/pages/SignIn';
import { MusicProvider } from './Components/provider/MusicProvider';
import Library from './Components/pages/Library';
import Social from './Components/pages/Social';

function App() {
  return (
    
    <div className='App' style={{marginTop:"85px",backgroundColor:"gray"}}>
      <UserProvider>
        <MusicProvider>
        <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/Social' element={<Social/>}/>

       </Routes>
      </BrowserRouter>
        </MusicProvider>
      
      </UserProvider>
      
    </div>
  );
}

export default App;

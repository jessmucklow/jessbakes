import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import GallaryPage from '../GallaryPage/GallaryPage';
import FAQ from '../FAQ/FAQ';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders/gallary' element={<GallaryPage />} />
            <Route path='/orders/FAQ' element={<FAQ />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

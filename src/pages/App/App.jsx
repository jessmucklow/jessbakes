import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import RequestHistoryPage from '../RequestHistoryPage/RequestHistoryPage';
import GalleryPage from '../GalleryPage/GalleryPage';
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
            <Route path='/orders/gallery' element={<GalleryPage />} />
            <Route path='/orders/requests' element={< RequestHistoryPage />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

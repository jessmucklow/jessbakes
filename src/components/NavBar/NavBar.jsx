import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar'>
      <Link href="#" className="logo" to='/home'>Jess Bakes</Link>
      <div className='welcome'>Welcome, {user.name}</div>
      <div className='navtabs'><Link href="#" to='/orders/Gallery'>Gallery</Link></div>
      <div className='navtabs'><Link href="#" to='/orders/new'>New Order</Link></div>
      <div className='navtabs'><Link href="#" to='/orders/requests'>Past Requests</Link></div>
      <div className='navtabs'><Link href="#" to='' onClick={handleLogOut}>Log Out</Link></div>
    </nav>
  );
}

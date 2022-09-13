import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <ul>
      <li><Link href="#" to='/home'>Jess Bakes</Link></li>
      <li><a href='#'>Welcome, {user.name}</a></li>
      <li><Link href="#" to='/orders/Gallery'>Gallery</Link></li>
      <li><Link href="#" to='/orders/new'>New Order</Link></li>
      <li><Link href="#" to='/orders/requests'>Past Requests</Link></li>
      <li><Link href="#" to='' onClick={handleLogOut}>🚪</Link></li>
    </ul>
    </nav>
  );
}

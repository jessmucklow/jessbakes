import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to='/orders/new'>New Order</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/FAQ'>FAQ</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/Gallary'>Gallery</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/requests'>Past Requests</Link>
      &nbsp; | &nbsp;
      <Link to='/home'>Jess Bakes</Link>
      &nbsp; | &nbsp;
      {/* Welcome, {user.name} */}
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
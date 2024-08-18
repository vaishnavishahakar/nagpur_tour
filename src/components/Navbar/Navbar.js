import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <span className='brand-name'>
        Nagpur-Tour📍🔎
        </span>

      <div className='navbar-links'>
        <a href='/' className='navbar-link'>Home</a>
        <a href='/about' className='navbar-link'>About</a>
        <a href='/contact' className='navbar-link'>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;

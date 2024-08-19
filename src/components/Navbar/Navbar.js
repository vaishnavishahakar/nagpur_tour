import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <span className='brand-name'>
        Nagpur-Tour📍🔎
        </span>

      <div className='navbar-links'>
        <a href='/' className='navbar-link'>Deeksha-Bhoomi</a>
        <a href='/Raman_Science_Centre' className='navbar-link'>Raman_Science_Centre</a>
        <a href='/shri_swaminarayan_mandir' className='navbar-link'>Shri Swaminarayan Mandir</a>
      </div>
    </div>
  );
}

export default Navbar;

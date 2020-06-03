import Link from 'next/link';
import './Header.scss';

const Header = () => (
  <nav className='navbar'>
    <Link href='/'><a>Home</a></Link>
    <Link href='/about'><a>About</a></Link>
  </nav>
);

export default Header;

import Router from 'next/router'
import Link from 'next/link';
import './Header.scss';

const Header = props => {
  const onGameSelect = gameId => {
    Router.push(`/esports/${gameId}/${props.tabName}`)
  };

  return <nav className='navbar'>
    <Link href='/'><a>Home</a></Link>
    <Link href='/about'><a>About</a></Link>
    <div className="EsportsHeader">
      <Link href='/esports/home/matches'><a>Esports-Matches</a></Link>
      <Link href='/esports/home/outrights'><a>Esports-Outrights</a></Link>
    </div>
    <div className="esportsMenu">
      <div onClick={() => onGameSelect('home')}>Home</div>
      <div onClick={() => onGameSelect('live')}>Live</div>
      <div onClick={() => onGameSelect('Dota2')}>Dota 2</div>
    </div>
  </nav>
}

export default Header;

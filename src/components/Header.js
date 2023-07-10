import logo from './images/logo.svg';
import '../App.css';

function Header() {
  return (
    <header>
      <nav className='nav'>
        <img src={logo} name='logo'></img>
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  );
}

export default Header;

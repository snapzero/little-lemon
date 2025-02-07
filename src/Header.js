import Nav from './Nav';
import logo from './assets/Logo.svg';

function Header() {
    return (
      <>
        <header>
          <div class="flex-container center">
            <img src={logo} alt="Little Lemon Logo" />
            <Nav />
          </div>
        </header>
      </>
    );
  }

  export default Header;
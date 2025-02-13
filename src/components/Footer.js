import Nav from './Nav';
import logo from '../assets/Logo.svg';

function Footer() {
    return (
      <>
        <footer>
          <div className="flex-container">
            <img src={logo} alt="Little Lemon Logo" />
            <section>
              <h4>Site Links</h4>
              <Nav />
            </section>
            <section>
              <h4>Contact</h4>
              <ul>
                <li>
                  <p>123 Skyway Drive</p>
                  <p>New York, NY 55511</p>
                </li>
                <li>(800) 555-1212</li>
                <li>info@littlelemon.com</li>
              </ul>
            </section>
            <section>
              <h4>Social Media Links</h4>
              <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twiiter</a></li>
                <li><a href="#instagram">Instagram</a></li>
              </ul>
            </section>
          </div>
        </footer>
      </>
    );
  }

  export default Footer;
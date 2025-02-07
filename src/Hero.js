import Button from './Button';
import HeroImage from './assets/restaurant.jpg';

function Hero() {
    return (
      <div className="hero">
        <article className="flex-container">
          <section>
            <h1 class="yellow">Little Lemon</h1>
            <h2 class="white">Chicago</h2>
            <p class="white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button type="button" text="Reserve a table" variant="primary" route="reservations" />
          </section>
          <section>
            <img src={HeroImage} width="400" />
          </section>
        </article>
      </div>
    );
  }

  export default Hero;
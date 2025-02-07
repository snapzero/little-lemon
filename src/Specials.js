import Button from './Button';
import SpecialCard from './SpecialCard';
import GreekSalad from './assets/greek-salad.jpg';
import Bruchetta from './assets/bruchetta.svg';
import LemonDessert from './assets/lemon-dessert.jpg';

function Specials() {
    return (
      <div className="specials">
        <section className="flex-container center">
          <h2>This weeks specials!</h2>
          <Button type="button" text="Online menu" variant="primary" />
        </section>
        <section className="grid-container">
          <SpecialCard className="grid-item" title="Greek Salad" price="13.00" image={GreekSalad}>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
          </SpecialCard>
          <SpecialCard className="grid-item" title="Bruchetta" price="15.00" image={Bruchetta}>
            Our delicious Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil to entice you to savor every bite.
          </SpecialCard>
          <SpecialCard className="grid-item" title="Lemon Dessert" price="9.00" image={LemonDessert}>
            This comes straight from Grandma&apos;s recipe book, every last ingredient has been sourced and is as authentic as can be imagined with love from the heart.
          </SpecialCard>
        </section>
      </div>
    );
  }

  export default Specials;
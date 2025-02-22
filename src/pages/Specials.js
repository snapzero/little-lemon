import Button from '../components/Button';
import SpecialCard from '../components/SpecialCard';
import GreekSalad from '../assets/greek-salad.jpg';
import Bruchetta from '../assets/bruchetta.svg';
import LemonDessert from '../assets/lemon-dessert.jpg';

const specials = [
  {
    id: 1,
    dish: 'Greek Salad',
    price: '13.00',
    image: GreekSalad,
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  },
  {
    id: 2,
    dish: 'Bruchetta',
    price: '15.00',
    image: Bruchetta,
    description: 'Our delicious Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil to entice you to savor every bite.'
  },
  {
    id: 3,
    dish: 'Lemon Dessert',
    price: '9.00',
    image: LemonDessert,
    description: 'This comes straight from Grandma&apos;s recipe book, every last ingredient has been sourced and is as authentic as can be imagined with love from the heart.'
  }
]

function Specials() {
    return (
      <div className="specials">
        <section className="flex-container center">
          <h2>This weeks specials!</h2>
          <Button aria-label="Click to see reviews" type="button" text="View our reviews" variant="primary" route="/testimonials" />
        </section>
        <section className="grid-container">
          {specials.map(special => (
            <SpecialCard 
              className="grid-item"
              key={special.id}
              title={special.dish}
              price={special.price}
              image={special.image}>
                {special.description}
            </SpecialCard>
          ))}
        </section>
      </div>
    );
  }

  export default Specials;
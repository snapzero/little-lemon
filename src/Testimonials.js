import TestimonialCard from './TestimonialCard';
import Person1 from './assets/person1.jpeg';
import Person2 from './assets/person2.jpeg';
import Person3 from './assets/person3.jpg';
import Person4 from './assets/person4.jpeg';

const reviews = [
  {
    id: 1,
    rating: 5,
    name: 'Vincent',
    image: Person1,
    description: 'Delicous food and excellent service!'
  },
  {
    id: 2,
    rating: 4,
    name: 'Angela',
    image: Person2,
    description: 'Good food and atmosphere.'
  },
  {
    id: 3,
    rating: 5,
    name: 'Kumar',
    image: Person3,
    description: 'Great dining experience!'
  },
  {
    id: 4,
    rating: 3,
    name: 'Mallory',
    image: Person4,
    description: 'Slow service but great food.'
  },
]

function Testimonials() {
    return (
      <div className="testimonials" id="testimonials">
        <h2 className="text-center white">Testimonials</h2>
        <section className="grid-container gc-col4">
          {reviews.map(review => (
            <TestimonialCard
              key={review.id}
              rating={review.rating}
              name={review.name}
              image={review.image}>
                {review.description}
            </TestimonialCard>
          ))}
        </section>
      </div>
    );
  }

  export default Testimonials;
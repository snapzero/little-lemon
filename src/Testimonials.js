import TestimonialCard from './TestimonialCard';
import Person1 from './assets/person1.jpeg';
import Person2 from './assets/person2.jpeg';
import Person3 from './assets/person3.jpg';
import Person4 from './assets/person4.jpeg';

function Testimonials() {
    return (
      <div className="testimonials" id="testimonials">
        <h2 className="text-center white">Testimonials</h2>
        <section className="grid-container gc-col4">
          <TestimonialCard rating="5" name="Vincent" image={Person1}>
            Delicous food and excellent service!
          </TestimonialCard>
          <TestimonialCard rating="4" name="Angela" image={Person2}>
            Good food and atmosphere.
          </TestimonialCard>
          <TestimonialCard rating="5" name="Kumar" image={Person3}>
            Great dining experience!
          </TestimonialCard>
          <TestimonialCard rating="3" name="Mallory" image={Person4}>
            Slow service but great food.
          </TestimonialCard>
        </section>
      </div>
    );
  }

  export default Testimonials;
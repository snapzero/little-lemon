import OwnersImage from './assets/Mario-and-Adrian-A.jpg';

function About() {
    return (
      <div className="about" id="about">
        <article className="flex-container center">
          <section>
            <h1 class="yellow">Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="margin-r-20">
              Little Lemon is a family-owned and operated restaurant that specializes in Mediterranean cuisine. We have been serving up delicious and authentic Mediterranean dishes for over 20 years, and we have become a favorite among locals and visitors alike.

              At Little Lemon, we believe that food is more than just sustenance. It is a way to bring people together and to share our culture. We are passionate about creating dishes that are both delicious and authentic. We use only the freshest and highest-quality ingredients, and we prepare our dishes using traditional Mediterranean cooking methods.

              Our menu features a wide variety of Mediterranean dishes, including appetizers, soups and salads, entrees, sandwiches and wraps, and sides. We also offer a variety of vegetarian and vegan options.
          </p>
          </section>
          <section>
            <img src={OwnersImage} width="400" />
          </section>
        </article>
      </div>
    );
  }

  export default About;
import AirBnb from '../svg/AirBnb';
import HubSpot from '../svg/HubSpot'
import Strapi from '../svg/Strapi';
import styles from './Testimonial.module.css'
import QuoteComponent from './TestimonialComponent'

function Quotes() {
  return (
    <div className={`${styles.background} min-h-[892px] w-full`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-20 place-items-center gap-5">
        <div className="flex flex-col gap-6 justify-center items-center w-full h-full">
          <div className="lg:ml-24 lg:mb-20">
            <h1 className="font-bold text-5xl">
              Real Stories from Real Customers
            </h1>
            <h6 className="max-w-max">Get inspired by these stories.</h6>
          </div>
          <QuoteComponent
            testimonial="To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable."
            logo={<HubSpot />}
            company="Vice President, GoPro"
            name="Floyd Miles"
            css="lg:w-[350px] lg:self-end"
          />
        </div>
        <div className="flex flex-col gap-5 lg:self-start w-full h-full lg:mt-20 items-start justify-center">
          <QuoteComponent
            logo={<AirBnb />}
            testimonial="I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
            company="CEO, Airbnb"
            name="Jane Cooper"
            css="lg:w-[500px]"
          />
          <QuoteComponent
            logo={<Strapi />}
            testimonial="Landify saved our time in designing my company page."
            company="Co-Founder, Strapi"
            name="Kristin Watson"
            css="lg:w-[340px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Quotes

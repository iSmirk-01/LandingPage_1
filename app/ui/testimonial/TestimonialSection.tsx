import AirBnb from '../svg/AirBnb';
import HubSpot from '../svg/HubSpot'
import Strapi from '../svg/Strapi';
import styles from './Testimonial.module.css'
import QuoteComponent from './TestimonialComponent'

function Quotes() {
  return (
    <div
      className={`${styles.background} h-[892px] w-full`}
    >
      <div className="flex h-full w-full items-center justify-center pt-10">
          <div className='flex flex-col items-center justify-center gap-10 -mt-40'>
            <div className='flex flex-col gap-3'>
              <h1 className='font-bold text-5xl max-w-[600px]'>Real Stories from Real Customers</h1>
              <h6 className='prose-sm'>Get inspired by these stories.</h6>
            </div>
          <QuoteComponent
            testimonial="To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable."
            logo={<HubSpot />}
            company="Vice President, GoPro"
            name="Floyd Miles"
            css="w-[350px] mt-10 self-end mr-10"
            />
          </div>
        <div className='flex flex-col gap-5 -ml-5'>
          <QuoteComponent
            logo={<AirBnb />}
            testimonial="I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
            company="CEO, Airbnb"
            name="Jane Cooper"
            css="w-[500px]"
          />
          <QuoteComponent
            logo={<Strapi />}
            testimonial="Landify saved our time in designing my company page."
            company="Co-Founder, Strapi"
            name="Kristin Watson"
            css="w-[340px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Quotes

import Nav from "./Nav"
import styles from './Hero.module.css'
import Mobile from "../svg/Mobile"
import PlayButton from "../svg/PlayButton"

function Hero() {

  return (
    <div className={`${styles.background} w-full m-h-[866px]`}>
      <Nav />
      {/* hero container */}
      <div
        role="hero"
        className="grid lg:grid-cols-2 grid-cols-1 p-16 h-full w-full lg:grid-flow-col-dense"
      >
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-bold">
            The easiest way to manage projects
          </h1>
          <p>
            From the small stuff to the big picture, organizes the work so teams
            know what to do, why it matters, and how to get it done.
          </p>
          <div className="flex gap-3 items-center">
            <button
              aria-label="Get started with project"
              className={`${styles.purpleBg} rounded-lg h-max w-max px-4 py-3 text-white hover:bg-violet-500 active:bg-violet-600`}
            >
              Get Started
            </button>
            <button
              aria-label="Watch introduction video"
              className={`flex gap-2 items-center justify-center cursor-pointer active:bg-violet-600 active:border-none active:text-white text-violet-600 text transition-colors duration-200 hover:outline-violet-600 hover:outline px-2 py-3 rounded`}
            >
              <PlayButton className="fill-white" />
              <span>Watch video</span>
            </button>
          </div>
        </div>
        <div className="flex justify-center w-full h-full">
          {/* right section */}
          <Mobile
            aria-label="Illustration of a mobile device"
            className="p-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero

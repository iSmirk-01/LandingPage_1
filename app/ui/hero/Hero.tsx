import Header from "./Header"
import styles from './Hero.module.css'
import Mobile from "../svg/Mobile"
import PlayButton from "../svg/PlayButton"

function Hero() {

  return (
    <div className={`${styles.background} w-full h-[866px]`}>
      <Header />
      <div className="grid grid-cols-2 p-16 h-full w-full">
        <div className="flex flex-col gap-10 mt-36">
          <h1 className="text-5xl font-bold">
            The easiest way to manage projects
          </h1>
          <p>
            From the small stuff to the big picture, organizes the work so teams
            know what to do, why it matters, and how to get it done.
          </p>
          <div className="flex gap-3 items-center">
            <button
              className={`${styles.purpleBg} rounded-lg h-max w-max px-4 py-3 text-white`}
            >
              Get Started
            </button>
            <div
              className={`${styles.purpleBorder} flex gap-2 items-center justify-center cursor-pointer`}
            >
              <PlayButton />
              <p className={`${styles.purpleText}`}>Watch video</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <Mobile className="ml-28" />
        </div>
      </div>
    </div>
  );
}

export default Hero

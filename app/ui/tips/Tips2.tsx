import Image from 'next/image'
import DoublePhone from '@/public/images/doublePhone.png'
import AndroidStore from '../svg/AndroidStore'
import AppleStore from '../svg/AppleStore'
import styles from './tips.module.css'
import BackToBackPhone from '@/public/images/backToBackPhone.png'

function Tips2() {
  return (
    <div className={`${styles.background} min-h-[558px] w-full grid grid-cols-1 md:grid-cols-2 place-items-center`}>
      <div className="flex flex-col items-center justify-center p-20">
        <div className='flex flex-col gap-6'>
            <h1 className="text-4xl font-bold">
              Manage all projects from
              <br /> your mobile
            </h1>
            <p className='prose'>
              Download the app to manage your projects, keep track of the progress
              and complete tasks without procastinating. Stay on track and complete
              on time!
            </p>
            <div className="flex flex-col gap-2 items-start justify-center">
            <h6>Get the App</h6>
            <div className="flex gap-2 items-start justify-center">
                <AndroidStore />
                <AppleStore />
            </div>
            </div>
        </div>
      </div>
      <Image className='hidden md:block' src={DoublePhone} alt="two mobile phones" />
      <Image className='md:hidden' src={BackToBackPhone} alt="two mobile phones" />
    </div>
  );
}

export default Tips2

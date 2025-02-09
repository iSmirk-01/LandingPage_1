import Image from 'next/image';
import ToolsIcons from "@/public/images/appsLogo.png";

function Tips1() {
  return (
    <div className='min-h-[431px] w-full grid grid-cols-1 md:grid-cols-2 place-items-center p-22 gap-10'>
      <div className='flex flex-col items-start justify-center gap-3'>
        <h1 className='font-bold text-5xl'>Easy integrations<br /> with 170+ tools</h1>
        <p className=''>Connect Landify with you favourite tools that you use<br /> daily and keep things on track</p>
      </div>
      <Image className='p-6' src={ToolsIcons} alt='a cluster of app tool icons'/>
    </div>
  )
}

export default Tips1;

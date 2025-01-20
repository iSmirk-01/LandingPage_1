import React from 'react'
import StatComponent from './StatComponent'
import RobustIcon from '../svg/RobustIcon';
import MultipleLayoutsIcon from '../svg/MultipleLayoutsIcon';
import BetterComponents from '../svg/BetterComponents';
import WellOrganised from '../svg/WellOrganised';

function Achievements() {
  return (
    <div className="h-[338px] w-full grid grid-cols-2 place-items-center">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-5xl">
          Our 18 years of <br /> achievements
        </h1>
        <p className="">with or super powers we have reached this</p>
      </div>

      <div className="grid grid-cols-2 place-items-start gap-8">
        <StatComponent
          icon={<RobustIcon />}
          stat="10,000+"
          from="Downloads per day"
        />
        <StatComponent
          icon={<MultipleLayoutsIcon />}
          stat="2 Million"
          from="Users"
        />
        <StatComponent
          icon={<BetterComponents />}
          stat="500+"
          from="Clients"
        />
        <StatComponent
          icon={<WellOrganised />}
          stat="140"
          from="Countries"
        />
      </div>
    </div>
  );
}

export default Achievements

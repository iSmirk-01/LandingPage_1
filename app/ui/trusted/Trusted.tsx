import HubSpot from "../svg/HubSpot";
import AirBnb from "../svg/AirBnb"
import Google from "../svg/Google"
import MicroSoft from "../svg/MircoSoft"
import Walmart from "../svg/Walmart";
import FedEx from "../svg/FedEx";

function TrustedBy() {
  
  return (
    <div className="min-h-[142px] w-full flex items-center justify-center">
      <div className="border-t-2 border-b-2 h-full w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-4 place-items-center h-full w-full gap-8 p-7">
          <AirBnb />
          <HubSpot />
          <Google />
          <MicroSoft />
          <Walmart className="md:col-span-2 lg:col-span-1" />
          <FedEx className="md:col-span-2 lg:col-span-1" />
        </div>
      </div>
    </div>
  );
}

export default TrustedBy

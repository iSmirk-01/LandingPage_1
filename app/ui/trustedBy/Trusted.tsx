import HubSpot from "./svg/HubSpot";
import AirBnb from "./svg/AirBnb"
import Google from "./svg/Google"
import MicroSoft from "./svg/MircoSoft"
import Walmart from "./svg/Walmart";
import FedEx from "./svg/FedEx";

function TrustedBy() {
  
  return (
    <div className="h-[142px] w-full flex items-center justify-center">
      <div className="border-t-2 border-b-2 h-full w-[90%]">
        <div className="grid grid-cols-6 place-items-center h-full w-full mx-3">
          <AirBnb />
          <HubSpot />
          <Google />
          <MicroSoft />
          <Walmart />
          <FedEx />
        </div>
      </div>
    </div>
  );
}

export default TrustedBy

import {
  faBath,
  faBed,
  faBorderAll,
  faSquare,
  faSquareParking,
  faSunPlantWilt,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import { GiWoodenFence } from "react-icons/gi";
import { GiElevator } from "react-icons/gi";

import Spec from "./Spec";
import dayjs from "dayjs";

const SpecsList = ({ type, specs }) => {
  console.log(type, specs);
  switch (type) {
    case "House":
      return (
        <div className="flex flex-wrap text-base">
          <Spec icon={faBed} value={`${specs?.bedrooms} Bed`} />
          <Spec icon={faBath} value={`${specs?.bathrooms} Bath`} />
          <Spec icon={faSquare} value={`${specs?.buildUpArea} `} />
          <Spec
            icon={faSquareParking}
            value={`${specs?.parkingSpaces} parking`}
          />
        </div>
      );
    case "Agriculture":
      return (
        <div className="flex flex-wrap text-base">
          <Spec icon={faBorderAll} value={`${specs?.sizeOfLand}`} />
          <Spec icon={faSunPlantWilt} value={`${specs?.soilType}`} />
          <Spec
            icon={GiWoodenFence}
            value={`${specs?.fencing ? "Fencing" : "No Fencing"} `}
          />
          <Spec
            icon={faWater}
            value={`${specs?.waterSource ? "Water Source" : "No Water Source"} `}
          />
        </div>
      );
    case "Residential Plot":
      return (
        <div className="flex flex-wrap text-base">
          <Spec icon={faBorderAll} value={`${specs?.sizeOfLand}`} />
          <Spec icon={faSunPlantWilt} value={`${specs?.soilType}`} />
          <Spec
            icon={GiWoodenFence}
            value={`${specs?.fencing ? "Fencing" : "No Fencing"} `}
          />
          <Spec
            icon={faWater}
            value={`${specs?.waterSource ? "Water Source" : "No Water Source"} `}
          />
        </div>
      );

    default:
      return null;
  }
};

export default SpecsList;

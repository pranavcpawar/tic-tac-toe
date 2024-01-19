/* eslint-disable react/prop-types */
import { ImCross } from "react-icons/im";
import { PiCircleBold } from "react-icons/pi";

const Square = ({ value, className }) => {
  return (
    <div className={`${className} flex ${value !== 2 && value !== 5 && value !== 8 ? "border-r-4": "" } ${ value !== 6 && value !== 7 && value !== 8 ? "border-b-4" : ""}`}>
      <ImCross color="#F2AA4C" size={60} />
      <PiCircleBold color="#DCE2F0" size={75} />
    </div>

  )
}

export default Square
import { GrHomeRounded } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { RiBook2Line } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <GrHomeRounded />
      <IoPersonOutline />
      <RiBook2Line />
      <FaLaptopCode />
      <BiMessageSquareDetail />
    </div>
  )
}

export default Navbar

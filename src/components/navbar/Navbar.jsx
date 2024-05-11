import { GrHomeRounded } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { RiBook2Line } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home"><GrHomeRounded /></a>
      <a href="#"><IoPersonOutline /></a>
      <a href="#"><RiBook2Line /></a>
      <a href="#"><FaLaptopCode /></a>
      <a href="#"><BiMessageSquareDetail /></a>
    </div>
  )
}

export default Navbar

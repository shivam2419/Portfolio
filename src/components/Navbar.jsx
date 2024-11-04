import logo from "../assets/ShivamSharmaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="my-5 w-10 rounded-full" src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
            <a  className="text-blue-900" href="https://linkedin.com/in/linkedin.com/in/shivam-sharma-185940274/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/shivam2419/" target="_blank"><FaGithub /></a>
            <a className="text-pink-800" href="https://instagram.com/_.shivamsharma.__" target="_blank"><FaInstagram/></a>
            <a href=""><FaTwitterSquare/></a>
        </div>
    </nav>
  )
}

export default Navbar
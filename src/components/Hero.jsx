import {HERO_CONTENT} from "../constants";
import profilePic from "../assets/ShivamSharmaprofile.png";
import { motion } from "framer-motion"
import "../style/Hero.css"
const container = (delay) => ({
  hidden : {x : -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 1, delay: delay},
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap" id="about-container">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start" id="about-left">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Shivam Sharma
                </motion.h1>
                <motion.span 
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                className="bg-gradient-to-r from-pink-300 via-blue-500 to-red-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer
                </motion.span>
                <motion.p variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tight">
                  {HERO_CONTENT}
                </motion.p>
            </div>
            </div>
            <div className="w-full lg:w-1/2" lg:p-8>
            <div className="flex justify-center" id="about-right">
                <motion.img 
                initial = {{x:100, opacity: 0}}
                animate ={{x:0, opacity:1}}
                transition={{duration: 1, delay: 1.5}}
                src={profilePic} alt="Shivam sharma" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

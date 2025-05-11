import { RiReactjsLine } from "react-icons/ri";
import { FaJs } from 'react-icons/fa';
import { motion } from "framer-motion";
import django from "../assets/django.png";
import cpp from "../assets/cpp.png";
import git from "../assets/git.png";
import sql from "../assets/sql.png";
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={django} alt="" className="text-7xl text-cyan-400" style={{height: "80px"}} />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJs className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={cpp} alt="" className="text-7xl text-cyan-400" style={{height: "80px"}} />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={sql} alt="" className="text-7xl text-cyan-400" style={{height: "80px"}} />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={git} alt="" className="text-7xl text-cyan-400" style={{height: "80px"}} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies;
import { EXPERIENCES } from "../constants"
import {motion} from "framer-motion";
const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial = {{opacity : 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-10 text-center text-4xl">
                Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial = {{opacity : 0, x: -100}}
                            transition={{duration: 1.3}}
                            className="w-full lg:w-1/4">
                                <img src={experience.image} alt={experience.title} style={{height: "150px", width: "250px"}} className="mb-6 rounded"/>
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial = {{opacity : 0, x: 100}}
                        transition={{duration: 1}}
                        className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{experience.role} -{" "} <span className="text-sm text-pruple-100">{experience.company}</span> 
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p></h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <p className="mb-4">Link : <a href={experience.link} target="_blank" className="text-blue-200">Click here</a></p>
                            {experience.technologies.map((tech, index) => (
                                <span key = {index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-800" > {tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
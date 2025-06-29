import { CONTACT } from "../constants"
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 ">{CONTACT.address}</motion.p>
        <a href="" className="border-b">{CONTACT.email}</a>
        <br /><br />
        <a href="https://drive.google.com/file/d/14Ri2AtHu2DoDn8ixwUgzcztupec9suJu/view?usp=drive_link" target="_blank" className="resume" id="resume">Get Resume</a>
      </div>
    </div>
  )
}

export default Contact
import { motion } from 'framer-motion'
import React from 'react'
import { X } from 'react-feather'

const SideDrawer = ({ SideDrawerHandler }) => {
  const backDropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }
  const sideDrawerVariants = {
    visible: { opacity: 1, x: 0, transition: { delay: 0.1 } },
    hidden: { opacity: 0, x: -100 }
  }
  return (
    <>
      <motion.div
        className="back-drop"
        initial="hidden"
        animate="visible"
        variants={backDropVariants}
        onClick={SideDrawerHandler}
      />
      <motion.div className="side-drawer p-4" initial="hidden" animate="visible" variants={sideDrawerVariants}>
        <span className="close-cart">
          <X size="30" className="icon" onClick={SideDrawerHandler} />
        </span>
        <ul>
          <li>Categories</li>
          <li>African stories</li>
          <li>About us</li>
        </ul>
      </motion.div>
    </>
  )
}

export default SideDrawer

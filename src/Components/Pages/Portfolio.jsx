import React from 'react'
import { motion } from "framer-motion"
function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2
      }}
    >
      <h1 className='text-3xl'>Portfolio page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore delectus minus neque deserunt libero minima officia provident cupiditate! Ratione, quidem mollitia distinctio eos veritatis consequatur quis? Dignissimos architecto deserunt perspiciatis tenetur, quis est blanditiis itaque dolores excepturi, rem repellat quam, ea mollitia ipsa! Animi soluta fugiat minus blanditiis facilis vitae mollitia qui molestiae saepe, corporis tempora voluptates, possimus omnis et quo eaque quaerat aliquid repudiandae iste. Magnam, earum totam eaque iste necessitatibus reprehenderit quod vel possimus aliquam ipsa asperiores dignissimos. Tempore, voluptate ipsum dolore ipsa mollitia architecto labore repellendus, at accusamus quos libero adipisci dolorem doloremque quas cupiditate, soluta nesciunt?</p>
    </motion.div>
  )
}

export default Portfolio
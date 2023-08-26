import React from 'react'
import {motion} from "framer-motion"
function Blogs() {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2
      }}
    >
      <h1 className='text-3xl'>Blogs page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellendus sequi asperiores ratione expedita. Tenetur officiis accusamus sit facilis non blanditiis! Libero doloribus non tempora quos deleniti necessitatibus ex quod dolor dolorem facere, sint repellendus iste iure expedita tenetur quam ea veniam excepturi ipsum officiis. Similique beatae adipisci minima, tempora eius repellat! Error nihil, natus, facilis veritatis sequi dolore reprehenderit molestiae officia aliquid magni voluptatem recusandae nam a omnis maiores enim quasi eum voluptatibus nisi nemo, mollitia ex corrupti! Dolorem laborum doloribus sunt numquam iste! Est nesciunt magnam eum voluptate officia similique a, deleniti rem mollitia ad. Tenetur, quod laudantium.</p>
    </motion.div>
  )
}

export default Blogs
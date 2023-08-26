import React from 'react'
import { motion } from "framer-motion"
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2
      }}
    >
      <h1 className='text-3xl'>Home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia perspiciatis laborum molestiae dolorum eligendi vero cupiditate temporibus voluptatibus praesentium placeat, ut quasi inventore delectus excepturi ipsam recusandae blanditiis aspernatur culpa, est soluta sapiente fuga. Consequuntur fuga beatae tempore placeat, culpa, itaque dolorem saepe eveniet dignissimos provident aliquam! Mollitia expedita incidunt, sit nobis nostrum facere quibusdam aperiam ab corporis, aliquam nemo praesentium voluptatibus explicabo neque quidem cumque. Eveniet, assumenda tempore vitae nostrum esse laboriosam debitis tenetur, alias placeat quia nihil, ipsum repudiandae. Voluptatibus, reprehenderit voluptate beatae qui id neque. Aliquid recusandae, magni quae esse saepe modi error enim odit. Dolores.</p>

    </motion.div>
  )
}

export default Home
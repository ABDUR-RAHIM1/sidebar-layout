import React from 'react'
import { motion } from "framer-motion"
function About() {
  return (
    <motion.div
       initial={{opacity : 0}}
       animate={{opacity :1}}
       exit={{opacity :0}}
       transition={{
         duration :2
       }}
     >
      <h1 className='text-3xl'>About page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum deleniti adipisci cum veniam amet totam beatae harum alias asperiores saepe, eum eligendi optio minus at pariatur qui culpa modi quod quasi perferendis fuga obcaecati. Beatae asperiores repellat earum quam exercitationem excepturi! Ex cupiditate ipsa rem repellendus nam, eaque aspernatur quasi dignissimos iure suscipit exercitationem asperiores quaerat consequuntur quis tenetur molestiae? Illo, impedit. Suscipit sequi ipsum fugiat, alias deleniti est natus, id tempore quae ullam dolore cumque accusantium, a impedit aliquam! Magnam, odit reprehenderit? Voluptatibus, voluptate quod! Modi velit vero optio commodi, quis ad suscipit impedit. Dicta doloremque fugit ratione!</p>
    </motion.div>
  )
}

export default About
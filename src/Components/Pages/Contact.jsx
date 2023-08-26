import React from 'react' 
import {motion} from "framer-motion"
function Contact() {
  return (
    <motion.div 
    initial={{opacity : 0}}
    animate={{opacity :1}}
    exit={{opacity :0}}
    transition={{
      duration :2
    }}
    >
    <h1 className='text-3xl'>Contact page</h1>

       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis, delectus aliquam in facilis mollitia, perferendis omnis unde ea, beatae a doloribus incidunt. Libero blanditiis dolorem ab veritatis delectus assumenda rem quia laboriosam minima? Dolores, nostrum iure aliquam deserunt voluptatibus quo vero porro perferendis dolore recusandae enim at eaque non minus veniam fuga, est omnis optio blanditiis! Consequuntur repudiandae sunt dolorem quae nulla ullam, molestias qui minus enim error officiis, quas vitae ut saepe quasi mollitia voluptate quod eius aperiam hic. Corporis sapiente fugiat iure totam incidunt, eaque commodi obcaecati fuga pariatur nisi. Voluptatibus facere dolorem nemo assumenda dignissimos officiis!</p>

    </motion.div>
  )
}

export default Contact
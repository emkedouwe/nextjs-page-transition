import { useRouter } from 'next/router'
import API from './../../service/api';
import { motion } from "framer-motion";

export default function Project(data) {
  console.log(data);
  const item = data.data[0];
  return(
    <div className="bg-gray-100 h-screen">
      <motion.div className="container mx-auto">
        <motion.figure className="image" layoutId={`image-${item.id}`}>
          <img src={item._embedded['wp:featuredmedia'][0].source_url} className="object-cover h-96 w-full" />
        </motion.figure>
        <div className="p-3">
          <motion.h1 
            className="text-xl text-purple-600"
            layoutId={`title-${item.id}`}
          >
            {item.title.rendered}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", delay: 1, duration: 1 }}
          >
            <div dangerouslySetInnerHTML={{__html: item.content.rendered}}></div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const result = await API.getProjectBySlug(context.params.slug);
  
  // Pass data to the page via props
  return { props: { data: result.data } }
}
import Head from 'next/head'
import useSWR from 'swr';
import {fetcher, getProjectsUrl} from './../service/api';
import Link from 'next/link'
import { motion } from "framer-motion";

export default function Home() {
  const { data, error }  = useSWR(getProjectsUrl(), fetcher);

  if(!data) {
    return(<div>Loading</div>);
  }

  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
        {data.data.map((item, key) => (
          <Link href={`/project/${item.slug}`} key={key}>
            <a>
              <div className="rounded bg-gray-100">
                <motion.figure className="image" layoutId={`image-${item.id}`}>
                  <img src={item._embedded['wp:featuredmedia'][0].source_url} className="object-cover h-48 w-full rounded" />
                </motion.figure>
                <motion.h1 
                  className="text-xl text-purple-600 p-2"
                  layoutId={`title-${item.id}`}
                >
                  {item.title.rendered}
                </motion.h1>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

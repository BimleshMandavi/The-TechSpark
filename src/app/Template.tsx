"use client";
import {motion} from 'framer-motion';
// import { Children } from 'react';

export default function Template({children}:{children:React.ReactNode}){
    return <motion.div
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{duration: 0.5}}
    >{children}</motion.div>
}
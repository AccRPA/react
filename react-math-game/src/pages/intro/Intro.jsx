import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function Intro(){
    return <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='h-screen bg-slate-100 flex flex-col justify-center align-items-center text-center'>
            <div className='text-sm font-medium text-black sm:text-lg lg:text-xl'>
                <p>Intro here</p>
                <Link to={'character'} 
                    className='px-2	py-2 border border-solid border-slate-300 bg-slate-400 text-white'
                >
                    Next
                </Link>
            </div>
        </motion.div>
}

export default Intro;
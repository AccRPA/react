import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function Character(){
    return <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='h-screen bg-slate-100 flex flex-col justify-center align-items-center text-center'
        >
            <div>Character here</div>
            <Link to={'/'}>Home</Link>
        </motion.div>
}

export default Character;
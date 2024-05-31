import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="App text-sm font-medium text-black sm:text-xl bg-orange-600">
      Hi there!   
    </motion.div>
  );
}

export default App;

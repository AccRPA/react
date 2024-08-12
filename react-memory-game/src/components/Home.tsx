import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RouteVariants } from "../constants/RoutesAnimation";

function Home() {
    return  <motion.div
                variants={RouteVariants}
                initial="initial"
                animate="final">
                    <Typography>Memory card game</Typography>
                    <Typography>find the pairs</Typography>
                    <Link to={'/game'}>PLAY</Link>
            </motion.div>;
}

export default Home;
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { RouteVariants } from "../constants/RoutesAnimation";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return  <motion.div
                variants={RouteVariants}
                initial="initial"
                animate="final"
                className="motion-home">
                    <Box textAlign="center">
                        <Typography className="title">Memory card game</Typography>
                        <Typography className="subtitle">Find the pairs!</Typography>
                    </Box>
                    <Button variant="contained"  onClick={() => navigate('/game')}>PLAY</Button>
            </motion.div>;
}

export default Home;
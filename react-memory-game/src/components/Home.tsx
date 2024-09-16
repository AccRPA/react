import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { RouteVariants } from "../constants/RoutesAnimation";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById('homeCards')?.classList.add('animate');
    });

    return  <motion.div
                variants={RouteVariants}
                initial="initial"
                animate="final"
                className="motion-home">
                    <Box textAlign="center">
                        <Typography className="title">Memory card game</Typography>
                    </Box>
                    <Box textAlign="center">
                        <div className="dummy-cards cards-home" id="homeCards">     
                            <div className="card">
                                <div className="back">
                                    Find the
                                </div>
                            </div>
                            <div className="card">
                                <div className="back">
                                    Pairs
                                </div>
                            </div>
                        </div>
                    </Box>
                    <Box display="flex" justifyContent="center" marginBottom="0.5">
                        <Button variant="action" onClick={() => navigate('/game')}>PLAY</Button>
                    </Box>
            </motion.div>;
}

export default Home;
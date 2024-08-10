import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
    return <div>
        <Typography>Memory card game</Typography>
        <Typography>find the pairs</Typography>
        <Link to={'/game'}>PLAY</Link>
    </div>;
}

export default Home;
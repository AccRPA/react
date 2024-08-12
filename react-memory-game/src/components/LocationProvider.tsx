import { AnimatePresence } from "framer-motion";

function LocationProvider({ children }: any) {
    return <AnimatePresence>{children}</AnimatePresence>;
}

export default LocationProvider;
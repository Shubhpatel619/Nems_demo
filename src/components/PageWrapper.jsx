import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96], // smooth cubic-bezier
        },
    },
    exit: {
        opacity: 0,
        y: -40,
        transition: {
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96],
        },
    },
};

const PageWrapper = ({ children }) => {
    const { pathname } = useLocation();

    // Scroll to top on route change smoothly
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return (
        <motion.div
            key={pathname} // important for AnimatePresence to detect change
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: "100%" }}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
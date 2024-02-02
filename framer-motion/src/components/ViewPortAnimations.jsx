import { motion, useInView } from "framer-motion";
import "../section.css";
import { useEffect, useRef } from "react";
const ViewPortAnimations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        console.log(`isin view`, isInView);
    }, [isInView]);
    return (
        <>
            <div
                style={{ height: "150vh", background: "blue", width: "100vw" }}
            ></div>
            <motion.div
                style={{ height: "100vh", background: "red", width: "100vw" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3.5 }}
            ></motion.div>
            <div
                ref={ref}
                style={{
                    height: "100vh",
                    background: "purple",
                    transition: "1s background",
                }}
            ></div>
        </>
    );
};

export default ViewPortAnimations;

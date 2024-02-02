import { useState } from "react";
import "../section.css";
import { motion, AnimatePresence } from "framer-motion";
const BasicOfMotion = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: ".8rem",
            }}
        >
            <motion.button
                className="example-button"
                onClick={() =>
                    setIsVisible((currentVisibility) => !currentVisibility)
                }
                layout
            >
                show/hide
            </motion.button>
            <AnimatePresence mode="popLayout">
                {isVisible && (
                    <motion.div
                        initial={{
                            rotate: "0deg",
                            scale: 0,
                            y: 0,
                        }}
                        animate={{
                            rotate: "180deg",
                            scale: 1,
                            y: [0, 150, -150, -150, 0],
                        }}
                        exit={{
                            scale: 0,
                            rotate: "0deg",
                            y: 0,
                        }}
                        transition={{
                            duration: 1.5,
                            // type: "spring",
                            ease: "anticipate",
                            times: [0, 0.25, 0.5, 0.85, 1],
                        }}
                        style={{
                            width: "250px",
                            height: "250px",
                            background: "black",
                        }}
                    ></motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BasicOfMotion;

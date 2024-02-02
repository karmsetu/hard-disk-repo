import { motion, MotionConfig } from "framer-motion";
import "../section.css";
const Gestures = () => {
    return (
        <>
            <div
                style={{
                    display: "grid",
                    placeContent: "center",
                    height: "100vh",
                    gap: ".8rem",
                }}
            >
                <MotionConfig
                    transition={{
                        duration: 0.07,
                        ease: "backInOut",
                    }}
                >
                    <motion.button
                        className="example-button"
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 1.19,
                            rotate: "2.5deg",
                        }}
                    >
                        Click me
                    </motion.button>

                    <motion.button
                        className="example-button"
                        style={{ background: "black" }}
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 1.19,
                            rotate: "2.5deg",
                        }}
                    >
                        Click me
                    </motion.button>
                </MotionConfig>
            </div>
        </>
    );
};

export default Gestures;

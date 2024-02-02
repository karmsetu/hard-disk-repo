import "../section.css";
import { motion } from "framer-motion";
const BasicOfMotion = () => {
    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: ".8rem",
            }}
        >
            <motion.div
                style={{
                    width: "100px",
                    height: "100px",
                    background: "black",
                }}
            ></motion.div>
        </div>
    );
};

export default BasicOfMotion;

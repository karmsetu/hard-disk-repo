import { motion } from "framer-motion";

export default function Blob() {
    return (
        <motion.div
            className="box"
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["2%", "5%", "50%", "50%", "2%"],
                background: ["#61dafbaa", "#4aa3d0", "#3673b5", "#61dafbaa"],
                filter: ["drop-shadow(0 0 2em #61dafbaa)"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}
        />
    );
}

/* eslint-disable react/prop-types */
import reactLogo from "../assets/react.svg";
import { useState, useEffect } from "react";
import { motion, spring } from "framer-motion";
import "../App.css";
import "../index.css";
export default function Loading() {
    const [loadingPer, setLoadingPer] = useState(0);
    // console.log(props.removeLoader);
    useEffect(() => {
        setInterval(() => {
            setLoadingPer((currPer) =>
                currPer >= 100 ? 100 : currPer + Math.floor(Math.random() * 3)
            );
        }, 75);
    }, []);
    const itemVariants = {
        active: {
            opacity: 1,
        },
        close: {
            opacity: 0,
            transition: { type: spring, duration: 2.5 },
        },
        removed: {
            display: "none",
        },
    };
    return (
        <>
            <motion.div
                className={`loader ${
                    loadingPer == 100 ? "close-loader" : null
                }`}
                variants={itemVariants}
                animate={loadingPer == 100 ? "close" : "active"}
            >
                <motion.div
                    className={`react-logo ${
                        loadingPer == 100 ? "close-loader" : null
                    }`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <a href="https://react.dev">
                        <img
                            src={reactLogo}
                            className={`logo react react-spin ${
                                loadingPer == 100 ? "react-glow" : null
                            }`}
                            alt="React logo"
                        />
                    </a>
                </motion.div>
                <h2>{loadingPer}%</h2>
            </motion.div>
        </>
    );
}

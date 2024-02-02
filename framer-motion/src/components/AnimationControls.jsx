import { motion, useAnimationControls } from "framer-motion";
import "../section.css";
const AnimationControls = () => {
    const controls = useAnimationControls();
    const handelClick = () => {
        console.log(`something`);
        controls.start({
            rotate: "180deg",
        });
    };
    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: ".8rem",
            }}
        >
            <button onClick={handelClick} className="example-button">
                flip it!
            </button>
            <motion.div
                style={{
                    width: 250,
                    height: 250,
                    background: "white",
                }}
                variants={{
                    initial: {
                        rotate: "0deg",
                    },
                    flip: {
                        rotate: "360deg",
                    },
                }}
                // transition={{
                //     duration: 1.5,
                //     ease: "backInOut",
                // }}
                initial="initial"
                animate={controls}
            ></motion.div>
        </div>
    );
};

export default AnimationControls;

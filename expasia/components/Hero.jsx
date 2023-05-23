import Script from "next/script";
import styles from "../styles/custom.module.css";
import classnames from 'classnames';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";

const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 }
};

export default function Hero({richText}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <Box sx={{ mt: "50px"}}>
            <motion.div className={styles.textsection} ref={ref}
                animate={controls}
                initial="hidden"
                variants={squareVariants}
                
            >
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#282e6a" }}>{richText.title}</Typography>
                <p className={classnames(styles.zoominleft)}>{richText.description}</p>
                <hr className={styles.mp4} />
                <p className={[styles.zoominright]}>The services being offered in Pakistan includes, but not
                    limited to: Trekking, Expedition, Cultural excursion, Religious tour, Youth and students’ summer
                    camps, Safaris, Bike tours & E-ticketing.</p>
            </motion.div>
        </Box>
    )
}
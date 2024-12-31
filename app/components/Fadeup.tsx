"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

export function FadeUp({
    children,
    delay = 0,
    duration = 0.5,
}: {
    children: ReactNode;
    delay?: number;
    duration?: number;
}) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 15,
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay,
                        duration,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
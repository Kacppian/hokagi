import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ text }) => {
    return (
        <div>
            {text.split(" ").map((word, index) => (
                <motion.span
                    className="text-default font-default"
                    key={index}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    style={{ display: "inline-block", marginRight: "5px" }}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};

export default TextReveal;

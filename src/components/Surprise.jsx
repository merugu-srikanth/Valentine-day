// Surprise.jsx - Welcome page before Valentine's Day game
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Surprise = ({ onContinue }) => {
    const [hearts, setHearts] = useState([]);

    // Create floating hearts
    React.useEffect(() => {
        const createHeart = () => {
            const h = {
                id: Date.now() + Math.random(),
                x: Math.random() * 100,
                delay: Math.random() * 2,
            };
            setHearts((prev) => [...prev, h]);
            setTimeout(() => setHearts((prev) => prev.filter((heart) => heart.id !== h.id)), 8000);
        };
        const interval = setInterval(createHeart, 500);
        return () => clearInterval(interval);
    }, []);

    const FloatingHeart = ({ heart }) => (
        <motion.div
            initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0.6 }}
            animate={{
                y: "-120vh",
                x: `${heart.x + (Math.random() - 0.5) * 20}vw`,
                rotate: 360,
            }}
            transition={{
                duration: 5 + Math.random() * 3,
                ease: "linear",
                delay: heart.delay,
            }}
            className="absolute text-2xl pointer-events-none"
            style={{ color: "#ff69b4" }}
        >
            💗
        </motion.div>
    );

    const customFontStyle = {
        fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
        textShadow: "2px 2px 4px rgba(255, 105, 180, 0.3)",
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-red-50 to-rose-50 flex items-center justify-center">
            {/* Floating hearts background */}
            <div className="absolute inset-0">
                {hearts.map((h) => (
                    <FloatingHeart key={h.id} heart={h} />
                ))}
            </div>

            {/* Main content card */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative z-10 w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-[40px]
                   shadow-[0_20px_50px_rgba(255,105,180,0.3)] border-4 border-pink-200 
                   text-center p-10 sm:p-12 mx-4"
            >
                {/* Animated heart icon */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-8xl mb-6"
                >
                    💝
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-pink-600 to-red-600 mb-6"
                    style={customFontStyle}
                >
                    Hi My Dear Ruchi !
                </motion.h1>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4 mb-8"
                >
                    <p className="text-2xl text-gray-800 font-bold" style={customFontStyle}>
                        This is a surprise for you! 🎁
                    </p>
                    <p className="text-xl text-pink-700" style={customFontStyle}>
                        Take a breath... ✨
                    </p>
                    <p className="text-lg animate-bounce text-gray-600" style={customFontStyle}>
                        And click continue when you're ready! 💖
                    </p>
                </motion.div>

                {/* Continue button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onContinue}
                    className="px-12 py-4 bg-gradient-to-r from-red-400 via-rose-400 to-pink-400
                     text-white font-bold text-xl rounded-2xl shadow-lg shadow-pink-300/50
                     hover:shadow-xl hover:shadow-pink-300/70 transition-all duration-300"
                    style={customFontStyle}
                >
                    CONTINUE...
                </motion.button>

                {/* Decorative sparkles */}
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-10 right-10 text-3xl"
                >
                    ✨
                </motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-10 left-10 text-3xl"
                >
                    ✨
                </motion.div>
            </motion.div>

            {/* Corner decorative hearts */}
            <div className="absolute top-10 left-10 text-4xl opacity-20">💖</div>
            <div className="absolute bottom-10 right-10 text-4xl opacity-20">💝</div>
            <div className="absolute top-10 right-20 text-4xl opacity-20">💕</div>
            <div className="absolute bottom-10 left-20 text-4xl opacity-20">💘</div>
        </div>
    );
};

export default Surprise;

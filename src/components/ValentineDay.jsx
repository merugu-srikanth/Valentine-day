// ValentineDay.jsx - Complete Valentine's Day Game with Sound Effects
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const ValentineDay = () => {
  // Icon components - Flat SVG designs
  const HeartIcon = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <path d="M60 100L20 65C10 55 10 40 20 30C30 20 45 20 55 30L60 35L65 30C75 20 90 20 100 30C110 40 110 55 100 65L60 100Z" fill="#FF6B9D" stroke="#FF1744" strokeWidth="3" />
    </svg>
  );

  const DinnerIcon = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <path d="M30 70C30 70 35 90 60 90C85 90 90 70 90 70L85 50H35L30 70Z" fill="#FFB3BA" stroke="#FF1744" strokeWidth="3" />
      <ellipse cx="60" cy="50" rx="25" ry="8" fill="#FF6B9D" stroke="#FF1744" strokeWidth="2" />
      <path d="M45 50C45 50 50 60 60 60C70 60 75 50 75 50" stroke="#FF1744" strokeWidth="2" fill="none" />
      <circle cx="50" cy="45" r="3" fill="#FFE5E5" />
      <circle cx="70" cy="45" r="3" fill="#FFE5E5" />
      <path d="M35 50L30 30M45 50L42 30M55 50L55 30M65 50L65 30M75 50L78 30M85 50L90 30" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const GiftIcon = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <rect x="35" y="50" width="50" height="40" fill="#FFB3BA" stroke="#FF1744" strokeWidth="3" />
      <rect x="30" y="40" width="60" height="15" fill="#FF6B9D" stroke="#FF1744" strokeWidth="3" />
      <path d="M60 40V90" stroke="#FF1744" strokeWidth="4" />
      <path d="M30 55H90" stroke="#FF1744" strokeWidth="4" />
      <circle cx="50" cy="35" r="8" fill="#FFE5E5" stroke="#FF6B9D" strokeWidth="2" />
      <circle cx="70" cy="35" r="8" fill="#FFE5E5" stroke="#FF6B9D" strokeWidth="2" />
    </svg>
  );

  const HandIcon = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <path d="M35 60C35 60 40 50 45 55L50 60L55 55C60 50 65 55 65 60L70 65L75 60C80 55 85 60 85 65L80 75C80 75 75 85 60 85C45 85 40 75 40 75L35 65V60Z" fill="#FFB3BA" stroke="#FF1744" strokeWidth="3" />
      <circle cx="45" cy="50" r="6" fill="#FF6B9D" />
      <circle cx="60" cy="48" r="6" fill="#FF6B9D" />
      <circle cx="75" cy="50" r="6" fill="#FF6B9D" />
      <path d="M50 70C50 70 55 75 60 75C65 75 70 70 70 70" stroke="#FF1744" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );

  const StarIcon = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="40" fill="#FFE5E5" stroke="#FF6B9D" strokeWidth="3" />
      <circle cx="48" cy="52" r="5" fill="#FF1744" />
      <circle cx="72" cy="52" r="5" fill="#FF1744" />
      <path d="M45 68C45 68 50 75 60 75C70 75 75 68 75 68" stroke="#FF1744" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M40 50C40 50 42 45 45 48" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M80 50C80 50 78 45 75 48" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="35" cy="45" r="3" fill="#FFB3BA" />
      <circle cx="85" cy="45" r="3" fill="#FFB3BA" />
    </svg>
  );

  const PuzzleIcon = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <rect x="30" y="30" width="30" height="30" fill="#FFB3BA" stroke="#FF1744" strokeWidth="3" />
      <rect x="60" y="30" width="30" height="30" fill="#FF6B9D" stroke="#FF1744" strokeWidth="3" />
      <rect x="30" y="60" width="30" height="30" fill="#FF6B9D" stroke="#FF1744" strokeWidth="3" />
      <rect x="60" y="60" width="30" height="30" fill="#FFB3BA" stroke="#FF1744" strokeWidth="3" />
      <circle cx="60" cy="45" r="8" fill="#FFE5E5" />
      <circle cx="45" cy="60" r="8" fill="#FFE5E5" />
    </svg>
  );

  const LoveIcon = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="40" fill="#FFE5E5" stroke="#FF6B9D" strokeWidth="3" />
      <path d="M45 55C45 55 50 50 55 55C60 60 60 60 60 60C60 60 60 60 65 55C70 50 75 55 75 55" stroke="#FF1744" strokeWidth="3" fill="none" />
      <path d="M45 70C45 70 55 80 60 80C65 80 75 70 75 70" stroke="#FF1744" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );

  const RingIcon = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="65" r="25" fill="none" stroke="#FF6B9D" strokeWidth="6" />
      <path d="M60 40L50 55L70 55L60 40Z" fill="#FFB3BA" stroke="#FF1744" strokeWidth="3" />
      <circle cx="60" cy="40" r="8" fill="#FFE5E5" stroke="#FF6B9D" strokeWidth="2" />
    </svg>
  );

  // All questions with flat icons
  const questions = [
    { q: "Will you be my Valentine?", icon: <HeartIcon />, l: "Level 1" },
    { q: "Can I take you out for dinner?", icon: <DinnerIcon />, l: "Level 2" },
    { q: "Wanna spend the day together?", icon: <GiftIcon />, l: "Level 3" },
    { q: "Can I hold your hand?", icon: <HandIcon />, l: "Level 4" },
    { q: "Do you think I'm cute?", icon: <StarIcon />, l: "Level 5" },
    { q: "Are we the perfect match?", icon: <PuzzleIcon />, l: "Level 6" },
    { q: "Will you accept my love?", icon: <LoveIcon />, l: "Level 7" },
    { q: "Can I be your forever?", icon: <RingIcon />, l: "Final Level" },
  ];

  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noEscaping, setNoEscaping] = useState(false); // Track if NO button is escaping

  const noBtnRef = useRef(null);
  const containerRef = useRef(null);

  const customFontStyle = {
    fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
    textShadow: "2px 2px 4px rgba(255, 105, 180, 0.3)",
  };

  // Sound effect functions using Web Audio API
  const playSound = (type) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    switch (type) {
      case 'hover':
        // Soft beep on hover
        oscillator.frequency.value = 600;
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;

      case 'noClick':
        // Playful "whoosh" sound when NO button runs away
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
        break;

      case 'yesClick':
        // Happy chime on YES click
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);

        // Add second note for harmony
        const osc2 = audioContext.createOscillator();
        const gain2 = audioContext.createGain();
        osc2.connect(gain2);
        gain2.connect(audioContext.destination);
        osc2.frequency.value = 1000;
        gain2.gain.setValueAtTime(0.2, audioContext.currentTime + 0.1);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
        osc2.start(audioContext.currentTime + 0.1);
        osc2.stop(audioContext.currentTime + 0.4);
        break;

      case 'complete':
        // Victory fanfare
        const notes = [523, 659, 784, 1047]; // C, E, G, C (major chord)
        notes.forEach((freq, i) => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.connect(gain);
          gain.connect(audioContext.destination);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.15);
          gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.15 + 0.5);
          osc.start(audioContext.currentTime + i * 0.15);
          osc.stop(audioContext.currentTime + i * 0.15 + 0.5);
        });
        break;

      default:
        break;
    }
  };

  // Create floating hearts animation
  useEffect(() => {
    const createHeart = () => {
      const h = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        delay: Math.random() * 2
      };
      setHearts((prev) => [...prev, h]);
      setTimeout(() => setHearts((prev) => prev.filter((heart) => heart.id !== h.id)), 8000);
    };
    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  // Reset NO button position and state when level changes
  useEffect(() => {
    setNoPos({ x: 0, y: 0 });
    setNoEscaping(false);
  }, [currentLevel]);

  // Move NO button to random position within container
  const moveNoButton = () => {
    const btn = noBtnRef.current;
    const container = containerRef.current;
    if (!btn || !container) return;

    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    // Get button dimensions
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    // Calculate max positions (so button stays inside container)
    const maxX = containerWidth - btnWidth;
    const maxY = containerHeight - btnHeight;

    // Random position within container
    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));

    setNoPos({ x: randomX, y: randomY });
  };

  // Handle YES button click
  const handleYesClick = () => {
    if (currentLevel < questions.length - 1) {
      // Play YES sound
      playSound('yesClick');

      // Move to next level
      setCurrentLevel((prev) => prev + 1);

      // Small confetti burst
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff69b4", "#ff1493", "#ffc0cb"]
      });
    } else {
      // Game completed - final level
      playSound('complete');
      setGameCompleted(true);
      finishGame();
    }
  };

  // Big confetti animation for game completion
  const finishGame = () => {
    const duration = 5000;
    const end = Date.now() + duration;
    const colors = ["#ff69b4", "#fd2d01", "#ffffff", "#ffdde1", "#ff1493"];

    const frame = () => {
      const timeLeft = end - Date.now();
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
        scalar: 1.2
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
        scalar: 1.2
      });
      if (timeLeft > 0) requestAnimationFrame(frame);
    };
    frame();
  };

  // Floating heart component
  const FloatingHeart = ({ heart }) => (
    <motion.div
      initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0.6 }}
      animate={{
        y: "-120vh",
        x: `${heart.x + (Math.random() - 0.5) * 20}vw`,
        rotate: 360
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        ease: "linear",
        delay: heart.delay
      }}
      className="absolute text-2xl pointer-events-none"
      style={{ color: "#ff69b4" }}
    >
      💗
    </motion.div>
  );

  // Handle hover on NO button
  const onNoHover = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!noEscaping) setNoEscaping(true); // Activate escaping mode
    playSound('hover');
    moveNoButton();
  };

  // Handle click on NO button
  const onNoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!noEscaping) setNoEscaping(true); // Activate escaping mode
    playSound('noClick');
    moveNoButton();
  };

  // Handle hover on YES button
  const onYesHover = () => {
    playSound('hover');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-red-50 to-rose-50 flex items-center justify-center">
      {/* Floating hearts background */}
      <div className="absolute inset-0">
        {hearts.map((h) => <FloatingHeart key={h.id} heart={h} />)}
      </div>

      {/* Main card - 80vh height */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[40px]
                   shadow-[0_20px_50px_rgba(255,105,180,0.3)] border-4 border-pink-200 text-center mx-4 
                   flex flex-col justify-between overflow-hidden"
        style={{ height: '80vh' }}
      >
        {/* Top section - Level, Emoji, Question */}
        <div className="p-6 sm:p-8">
          {/* Level indicator */}
          <motion.div
            key={currentLevel}
            initial={{ scale: 0.5, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100
                       text-pink-600 rounded-full text-sm font-bold mb-4 uppercase tracking-widest shadow-sm"
            style={customFontStyle}
          >
            {questions[currentLevel].l}
          </motion.div>

          {/* Icon */}
          <motion.div
            key={`icon-${currentLevel}`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex justify-center items-center mb-4"
          >
            {questions[currentLevel].icon}
          </motion.div>

          {/* Question */}
          <motion.h1
            key={`question-${currentLevel}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-tight"
            style={customFontStyle}
          >
            {questions[currentLevel].q}
          </motion.h1>
        </div>

        {/* Bottom section - Buttons container */}
        <div
          ref={containerRef}
          className="relative flex-1 flex justify-center items-center p-4"
          style={{
            width: '100%',
            minHeight: '200px'
          }}
        >
          {/* YES button - stays in center */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYesClick}
            onMouseEnter={onYesHover}
            className="px-8 py-3 bg-gradient-to-r from-red-400 via-rose-400 to-pink-400
                       text-white font-bold rounded-2xl shadow-lg shadow-pink-300/50
                       hover:shadow-xl hover:shadow-pink-300/70 transition-all duration-300 
                       min-w-[120px] relative z-10"
            style={customFontStyle}
          >
            <span className="text-lg sm:text-xl">
              {gameCompleted ? (
                <span>
                  I LOVE YOU! <span className="animate-pulse">💕</span>
                </span>
              ) : (
                <span>
                  YES! <span className="animate-pulse">💕</span>
                </span>
              )}
            </span>
          </motion.button>

          {/* NO button - starts in row, then jumps when escaping */}
          {!gameCompleted && (
            <motion.button
              ref={noBtnRef}
              onMouseEnter={onNoHover}
              onClick={onNoClick}
              animate={noEscaping ? { x: noPos.x, y: noPos.y } : { x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200
                         text-gray-500 font-bold rounded-2xl border-2 border-gray-300
                         shadow-lg cursor-pointer"
              style={{
                ...customFontStyle,
                minWidth: "100px",
                position: noEscaping ? "absolute" : "relative",
                left: noEscaping ? 0 : "auto",
                top: noEscaping ? 0 : "auto",
                marginLeft: noEscaping ? 0 : '1rem'
              }}
            >
              <span className="text-lg">No 😢</span>
            </motion.button>
          )}
        </div>

        {/* Game completion overlay */}
        <AnimatePresence>
          {gameCompleted && (
            <motion.div
              initial={{ opacity: 1, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center
                         bg-gradient-to-br from-pink-500/30 to-red-500/30 backdrop-blur-sm rounded-[40px]"
            >
              <div className="text-8xl mb-6">🥰</div>
              <h2
                className="text-4xl font-extrabold text-transparent bg-clip-text 
                           bg-gradient-to-r from-pink-600 to-red-600 mb-4"
                style={customFontStyle}
              >
                YAY! 🎉
              </h2>
              <p className="text-2xl text-pink-700 font-bold mb-2" style={customFontStyle}>
                You made me the happiest! 💖
              </p>
              <p className="text-lg text-pink-600" style={customFontStyle}>
                Happy Valentine&apos;s Day! ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Corner decorative hearts */}
      <div className="absolute top-10 left-10 text-4xl opacity-20">💖</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-20">💝</div>
      <div className="absolute top-10 right-10 text-4xl opacity-20">💕</div>
      <div className="absolute bottom-10 left-10 text-4xl opacity-20">💘</div>
    </div>
  );
};

export default ValentineDay;

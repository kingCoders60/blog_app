import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTypingLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 120 120"
        className="text-blue-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Simplified keyboard base */}
        <motion.rect
          x="20"
          y="60"
          width="80"
          height="30"
          rx="8"
          fill="#1f2937"
          stroke="#374151"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        
        {/* Simplified keyboard keys with prominent animation */}
        <motion.g>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.rect
              key={`key-${i}`}
              x={28 + i * 9}
              y="68"
              width="6"
              height="6"
              rx="2"
              fill="#6b7280"
              animate={{
                fill: ["#6b7280", "#3b82f6", "#6b7280"],
                scale: [1, 1.2, 1],
                y: [0, -2, 0]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>

        {/* Second row of keys */}
        <motion.g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.rect
              key={`key2-${i}`}
              x={32 + i * 9}
              y="78"
              width="6"
              height="6"
              rx="2"
              fill="#6b7280"
              animate={{
                fill: ["#6b7280", "#10b981", "#6b7280"],
                scale: [1, 1.2, 1],
                y: [0, -2, 0]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: 0.6 + i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>
        
        {/* Large animated cursor/typing indicator */}
        <motion.rect
          x="75"
          y="45"
          width="3"
          height="12"
          rx="1.5"
          fill="#3b82f6"
          animate={{
            opacity: [0, 1, 1, 0],
            scaleY: [1, 1.2, 1, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles for typing effect */}
        <motion.g>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`particle-${i}`}
              cx={40 + i * 20}
              cy="50"
              r="2"
              fill="#60a5fa"
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5],
                y: [0, -15, -25]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.g>

        {/* Text lines being "typed" */}
        <motion.g>
          {[0, 1, 2].map((i) => (
            <motion.rect
              key={`line-${i}`}
              x="25"
              y={25 + i * 8}
              width="0"
              height="2"
              rx="1"
              fill="#3b82f6"
              animate={{
                width: [0, 50, 50, 0],
                opacity: [0, 1, 1, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>
      </motion.svg>
      
      {/* Animated brand text */}
      <motion.div
        className="text-blue-600 font-bold text-xl hidden sm:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.span
          className="inline-block"
          animate={{ 
            color: ["#3b82f6", "#10b981", "#3b82f6"],
            textShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 10px rgba(59,130,246,0.5)", "0 0 0px rgba(59,130,246,0)"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          TypeBlog
        </motion.span>
      </motion.div>
    </div>
  );
};

export default AnimatedTypingLogo;
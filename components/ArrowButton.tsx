import { motion, Variants } from "framer-motion";
import React from "react";

type ArrowButtonProps = {
  color?: string;
  size?: "small" | "large";
  isHovered?: boolean;
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  color = "white",
  size = "large",
  isHovered = false,
}) => {
  const buttonSize = size === "small" ? "56px" : "68px";

  return (
    <motion.div
      className="relative overflow-hidden rounded-full"
      style={{
        width: buttonSize,
        height: buttonSize,
        backgroundColor: "#171717",
      }}
      animate={isHovered ? "hover" : "default"} // Use the external hover state
      initial="default"
      variants={fakeBgMotion}
    >
      <div
        className="overflow-hidden"
        style={{
          width: buttonSize,
          height: buttonSize,
        }}
      >
        <motion.div
          className="flex z-10"
          style={{
            width: size === "small" ? "112px" : "136px",
            height: buttonSize,
          }}
          variants={size === "small" ? imageVariantsSmall : imageVariants}
        >
          <div
            style={{
              width: buttonSize,
              height: buttonSize,
            }}
            className="flex justify-center items-center z-20"
          >
            <ArrowRightIcon color={color} />
          </div>
          <div
            className="flex justify-center items-center z-20"
            style={{
              width: buttonSize,
              height: buttonSize,
            }}
          >
            <ArrowRightIcon color={color} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Animation Variants
const fakeBgMotion: Variants = {
  default: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1,
  },
};

const imageVariantsSmall: Variants = {
  default: {
    x: -56,
  },
  hover: {
    x: 0,
  },
  tap: {
    x: -1,
  },
};

const imageVariants: Variants = {
  default: {
    x: -68,
  },
  hover: {
    x: 0,
  },
  tap: {
    x: -3,
  },
};

// ArrowRightIcon Component
const ArrowRightIcon = ({ color }: { color: string }) => (
  <svg
    height="40px"
    width="40px"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    className="scale-[0.55]"
  >
    <path d="M640 768c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733333l213.333333-213.333333c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733333l-213.333333 213.333333C661.333333 763.733333 652.8 768 640 768z" />
    <path d="M853.333333 554.666667c-12.8 0-21.333333-4.266667-29.866667-12.8l-213.333333-213.333333c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0l213.333333 213.333333c17.066667 17.066667 17.066667 42.666667 0 59.733333C874.666667 550.4 866.133333 554.666667 853.333333 554.666667z" />
    <path d="M853.333333 554.666667 170.666667 554.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667s17.066667-42.666667 42.666667-42.666667l682.666667 0c25.6 0 42.666667 17.066667 42.666667 42.666667S878.933333 554.666667 853.333333 554.666667z" />
  </svg>
);

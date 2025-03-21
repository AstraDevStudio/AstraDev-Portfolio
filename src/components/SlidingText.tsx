import { motion } from "framer-motion";

const SlidingText = () => {
  return (
    <div className="overflow-hidden flex justify-center h-[20rem] absolute top-[10rem] whitespace-nowrap items-center  w-full">
      <motion.h2
        className="text-[14rem] font-extrabold font-Dela-Gothic-One text-white"
        initial={{ x: "100%" }} // Start off-screen (right)
        animate={{ x: "-100%" }} // Move off-screen (left)
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }} // Infinite loop
      >
        WHAT WE DO
      </motion.h2>
    </div>
  );
};

export default SlidingText;

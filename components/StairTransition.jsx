"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = useParams();
  return (
    <>
      <AnimatePresence made="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex">
            <Stairs />
          </div>
          <motion.div
            className="w-screen h-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};
export default StairTransition;

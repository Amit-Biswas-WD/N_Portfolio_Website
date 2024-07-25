"use client";

import { AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const paramsName = useParams();
  return (
    <>
      <AnimatePresence made="wait">
        <div key={paramsName}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 z-40 pointer-events-none flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};
export default StairTransition;

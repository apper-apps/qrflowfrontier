import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Card = React.forwardRef(({ 
  children, 
  className, 
  hover = true,
  ...props 
}, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "glass-effect rounded-2xl p-6 backdrop-blur-20",
        className
      )}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";

export default Card;
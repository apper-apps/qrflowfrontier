import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No data found", 
  description = "There's nothing here yet.", 
  action,
  actionLabel = "Get Started",
  icon = "Search"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center space-y-6 p-8 text-center"
    >
      <div className="w-24 h-24 bg-gradient-to-br from-primary-500/20 to-cyber-pink/20 rounded-full flex items-center justify-center">
        <ApperIcon name={icon} size={40} className="text-primary-400" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70 max-w-md">{description}</p>
      </div>

      {action && (
        <Button onClick={action} variant="primary">
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
};

export default Empty;
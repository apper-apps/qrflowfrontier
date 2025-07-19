import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center space-y-6 p-8 text-center"
    >
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
        <ApperIcon name="AlertCircle" size={32} className="text-red-400" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">Error</h3>
        <p className="text-white/70 max-w-md">{message}</p>
      </div>

      {onRetry && (
        <Button onClick={onRetry} variant="primary">
          <ApperIcon name="RefreshCw" size={16} className="mr-2" />
          Try Again
        </Button>
      )}
    </motion.div>
  );
};

export default Error;
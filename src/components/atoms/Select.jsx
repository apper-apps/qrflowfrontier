import React from "react";
import { cn } from "@/utils/cn";

const Select = React.forwardRef(({ 
  className, 
  children,
  label,
  error,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-white/90">
          {label}
        </label>
      )}
      <select
        className={cn(
          "w-full px-4 py-3 rounded-xl glass-effect text-white border border-white/20 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 bg-transparent",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
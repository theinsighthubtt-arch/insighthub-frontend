import React from "react";
export function Button({ className = "", children, variant = "default", ...props }) {
  const base = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 ring-slate-300";
  const rounded = "rounded-xl";
  const sizes = "h-10 px-4";
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border border-slate-200 text-slate-900 hover:bg-slate-50"
  };
  return <button className={`${base} ${rounded} ${sizes} ${variants[variant]} ${className}`} {...props}>{children}</button>;
}
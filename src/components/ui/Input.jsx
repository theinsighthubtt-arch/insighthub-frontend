import React from "react";
export function Input({ className = "", ...props }) {
  return <input className={`w-full border border-slate-200 rounded-xl h-10 px-3 focus:outline-none focus:ring-2 ring-slate-300 ${className}`} {...props} />;
}
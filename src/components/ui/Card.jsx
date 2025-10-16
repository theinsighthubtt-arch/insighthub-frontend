import React from "react";
export function Card({ className = "", children }) { return <div className={`bg-white border border-slate-200 ${className}`}>{children}</div>; }
export function CardHeader({ className = "", children }) { return <div className={`p-4 border-b border-slate-100 ${className}`}>{children}</div>; }
export function CardTitle({ className = "", children }) { return <div className={`text-lg font-semibold ${className}`}>{children}</div>; }
export function CardContent({ className = "", children }) { return <div className={`p-4 ${className}`}>{children}</div>; }

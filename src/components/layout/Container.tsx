import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "default" | "lg";
}) {
  const max = size === "sm" ? "max-w-4xl" : size === "lg" ? "max-w-7xl" : "max-w-6xl";
  return <div className={cn("mx-auto w-full px-5 sm:px-8", max, className)}>{children}</div>;
}

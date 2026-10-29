import { type SVGProps } from "react";

export type TrustIconName =
  "planting" | "protection" | "awareness" | "community" | "youth" | "campus";

type TrustIconProps = SVGProps<SVGSVGElement> & { name: TrustIconName };

export function TrustIcon({ name, className, ...props }: TrustIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {name === "planting" && (
        <>
          <path d="M24 38V20" />
          <path d="M23 27c-8-12-15-9-14-4 1 5 7 8 14 7Z" fill="currentColor" fillOpacity=".2" />
          <path d="M25 22c7-12 15-10 15-5 0 5-7 9-15 9Z" fill="currentColor" fillOpacity=".2" />
          <path d="M9 38h30M16 38l3 4h10l3-4" />
          <path d="M24 23 14 18m11 2 10-7" strokeOpacity=".65" />
        </>
      )}
      {name === "protection" && (
        <>
          <path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11Z" />
          <path d="M24 31V18" />
          <path
            d="M23 23c-6-8-11-6-10-2 1 3 5 5 10 5Zm2-5c5-8 10-6 10-2 0 3-5 6-10 6Z"
            fill="currentColor"
            fillOpacity=".18"
          />
        </>
      )}
      {name === "awareness" && (
        <>
          <circle cx="24" cy="21" r="8" />
          <path d="M24 4v4m0 26v5M7 21h5m24 0h5M12 9l4 4m16 16 4 4m0-24-4 4M16 29l-4 4" />
          <path d="M19 38h10M21 34h6" />
        </>
      )}
      {name === "community" && (
        <>
          <circle cx="24" cy="15" r="5" />
          <circle cx="11" cy="20" r="4" />
          <circle cx="37" cy="20" r="4" />
          <path d="M14 39v-4c0-6 4-10 10-10s10 4 10 10v4M4 38v-3c0-4 2-7 7-7m33 10v-3c0-4-2-7-7-7" />
          <path
            d="M24 8c-3-4-7-3-7 0 0 3 4 4 7 5 3-2 7-3 7-6s-4-4-7 1Z"
            fill="currentColor"
            fillOpacity=".22"
          />
        </>
      )}
      {name === "youth" && (
        <>
          <path d="M24 39V22" />
          <path
            d="M23 29c-7-10-14-8-13-3 1 4 7 7 13 6Zm2-6c7-10 14-8 14-3 0 4-7 7-14 7Z"
            fill="currentColor"
            fillOpacity=".2"
          />
          <path d="M8 40h32M12 16l3-5 3 5m12-3 3-5 3 5" />
          <circle cx="15" cy="8" r="2" fill="currentColor" />
          <circle cx="33" cy="5" r="2" fill="currentColor" />
        </>
      )}
      {name === "campus" && (
        <>
          <path d="m6 20 18-11 18 11H6Zm4 0v17m9-17v17m10-17v17m9-17v17M7 39h34" />
          <path
            d="M24 29v-8m0 3c-4-5-8-3-7 0s4 4 7 3Zm0-2c4-5 8-3 7 0s-4 4-7 3Z"
            fill="currentColor"
            fillOpacity=".18"
          />
        </>
      )}
    </svg>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

export const SpotlightHalf = ({ className, fill }) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] w-full opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 250" // Adjust the viewBox to focus on the lower portion
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1893.5" // Center the ellipse horizontally
          cy="250" // Position the ellipse at the bottom of the viewBox
          rx="1893.5" // Horizontal radius to match the viewBox width
          ry="250" // Vertical radius to create a half-circle that covers 25% of the height
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0"
          y="0" // The filter should start at the top of the viewBox
          width="3787"
          height="250" // Height matches the viewBox height
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="100" // Blur effect for a soft glow
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

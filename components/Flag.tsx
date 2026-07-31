import React from "react";

interface FlagProps {
  country: "FR" | "GB" | "ES" | "PT" | "DE" | "CN";
  className?: string;
}

export default function Flag({ country, className = "w-5 h-4 inline-block" }: FlagProps) {
  switch (country) {
    case "FR":
      return (
        <svg className={`${className} shadow-sm rounded-sm`} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#ffffff" />
          <rect x="2" width="1" height="2" fill="#ED2939" />
        </svg>
      );
    case "GB":
      return (
        <svg className={`${className} shadow-sm rounded-sm`} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="s">
            <path d="M0,0 L60,0 L60,30 L0,30 z" />
          </clipPath>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#012169" strokeWidth="4" />
          <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
          <path d="M0,0 L30,15 M60,30 L30,15 M60,0 L30,15 M0,30 L30,15" stroke="#C8102E" strokeWidth="4" clipPath="url(#s)" />
        </svg>
      );
    case "ES":
      return (
        <svg className={`${className} shadow-sm rounded-sm`} viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg">
          <rect width="750" height="500" fill="#c8102e" />
          <rect y="125" width="750" height="250" fill="#fabd00" />
        </svg>
      );
    case "PT":
      return (
        <svg className={`${className} shadow-sm rounded-sm`} viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="400" fill="#006600" />
          <rect x="240" width="360" height="400" fill="#ff0000" />
          <circle cx="240" cy="200" r="60" fill="#ffff00" opacity="0.9" />
        </svg>
      );
    case "DE":
      return (
        <svg className={`${className} shadow-sm rounded-sm`} viewBox="0 0 5 3" xmlns="http://www.w3.org/2000/svg">
          <rect width="5" height="1" fill="#000000" />
          <rect y="1" width="5" height="1" fill="#DD0000" />
          <rect y="2" width="5" height="1" fill="#FFCC00" />
        </svg>
      );
    case "CN":
      return (
        <svg className={`${className} shadow-sm rounded-sm`} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" fill="#de2910">
          <rect width="30" height="20" />
          <polygon points="5,2 4,5 7,3 3,3 6,5" fill="#ffde00" transform="scale(1.2)" />
        </svg>
      );
    default:
      return null;
  }
}

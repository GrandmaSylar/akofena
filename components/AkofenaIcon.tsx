interface AkofenaIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function AkofenaIcon({
  size = 40,
  className = "",
  color = "#C9933A",
}: AkofenaIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sword 1: rotated -45deg, blade points upper-right */}
      <g transform="rotate(-45, 40, 40)" fill={color}>
        {/* Blade */}
        <polygon points="40,5 37,40 43,40" />
        {/* Guard */}
        <rect x="27" y="40" width="26" height="5" rx="2" />
        {/* Handle */}
        <rect x="37.5" y="45" width="5" height="15" rx="2" fill={color} opacity="0.75" />
        {/* Pommel */}
        <ellipse cx="40" cy="63" rx="4.5" ry="3.5" />
      </g>

      {/* Sword 2: rotated +45deg, blade points upper-left */}
      <g transform="rotate(45, 40, 40)" fill={color}>
        {/* Blade */}
        <polygon points="40,5 37,40 43,40" />
        {/* Guard */}
        <rect x="27" y="40" width="26" height="5" rx="2" />
        {/* Handle */}
        <rect x="37.5" y="45" width="5" height="15" rx="2" fill={color} opacity="0.75" />
        {/* Pommel */}
        <ellipse cx="40" cy="63" rx="4.5" ry="3.5" />
      </g>
    </svg>
  );
}

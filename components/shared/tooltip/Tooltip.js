import { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <span className="absolute top-full mt-1 left-0 z-50 p-2 bg-primary/30 rounded text-xs">
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;

import React, { useEffect, useRef } from "react";

function ValueDisplay({ value }) {
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className="value-display">
      <p>Current Value: {value || "—"}</p>
      <p>Previous Value: {prevValue.current || "—"}</p>
    </div>
  );
}

export default ValueDisplay;

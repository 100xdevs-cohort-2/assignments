import { useState, useCallback, useRef } from "react";

export function Assignment2() {
  const [_, forceRender] = useState(0); // use a state hook to force re-render
  const renderCount = useRef(0);

  const handleReRender = useCallback(() => {
    // Update the current render count
    renderCount.current += 1;
    // Trigger re-render
    forceRender(renderCount.current);
  }, []);

  return (
    <div>
      <p>This component has rendered {renderCount.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}

import React from "react";
import { useCount } from "./context";
import CountRenderer from "./CountRenderer";

const Counter = () => {
  const count = useCount();

  return (
    <div style={styles.container}>
      <CountRenderer />
      <button style={styles.button} onClick={() => count.set(count + 1)}>
        Increment
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", 
  },
  button: {
    marginTop: 10, 
  },
};

export default Counter;

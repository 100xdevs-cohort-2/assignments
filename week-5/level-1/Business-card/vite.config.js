import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  esbuild: {
    // Add the following line to enable JSX syntax for .js files
    jsxInject: `import React from 'react'`,
  },
};

import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-4 border-blue-500">hehehehehhe</div>
      {children}
    </div>
  );
}

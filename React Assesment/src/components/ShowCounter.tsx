import React from "react";

interface ComponentProps {
  count: number;
  updatedCount: () => void;
}
// using memo to render ShowCounter component only when its props have changed
const ShowCounter = ({ count, updatedCount }: ComponentProps) => {
  console.log("ShowCounter rendered !!");
  return (
    <div>
      <h4>{count}</h4>
      <button type="button" onClick={updatedCount}>
        Show updated count in console
      </button>
    </div>
  );
};

export default React.memo(ShowCounter);

import React, { memo } from "react";

const Component = (props) => {
  console.log("Re-Rendering");
  return (
    <div>
      Render: {props.newCount}
      <br />
    </div>
  );
};

export default memo(Component);

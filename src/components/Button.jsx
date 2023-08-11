import React from "react";

function Button({ ref }) {
  return (
    <div>
      <button ref={ref} className="bg-blue-400 py-2 px-2 rounded-md text-white">
        Click Me
      </button>
    </div>
  );
}

export default Button;

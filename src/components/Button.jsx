// components/Button.jsx
"use client";

import clsx from "clsx";

const Button = ({ text, outline = false, className }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-md text-[16px] font-semibold shadow transition transform hover:-translate-y-1",
        outline
          ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
          : "bg-orange-500 hover:bg-orange-600 text-white",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;

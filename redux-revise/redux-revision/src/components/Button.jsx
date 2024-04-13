import React from "react";

const Button = ({ children, type, handler }) => {
  const styles =
    type === "danger"
      ? "bg-rose-500 text-white px-3 py-2 rounded shadow"
      : "bg-sky-500 text-white px-3 py-2 rounded shadow";

  return (
    <button className={styles} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;

import React from "react";

export const Texts = ({ children, className, tag }) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "span" && <span className={className}>{children}</span>}
    </>
  );
};

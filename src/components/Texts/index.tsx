import React, { ReactNode } from "react";

interface ITexts {
  children: ReactNode;
  className?: string;
  tag: string;
  htmlFor?: string;
}

export const Texts = ({ children, className, tag, htmlFor }: ITexts) => {
  return (
    <>
      {tag === "h1" && <h1 className={className}>{children}</h1>}
      {tag === "h2" && <h2 className={className}>{children}</h2>}
      {tag === "h3" && <h3 className={className}>{children}</h3>}
      {tag === "span" && <span className={className}>{children}</span>}
      {tag === "label" && (
        <label htmlFor={htmlFor} className={className}>
          {children}
        </label>
      )}
      {tag === "p" && <p className={className}>{children}</p>}
    </>
  );
};

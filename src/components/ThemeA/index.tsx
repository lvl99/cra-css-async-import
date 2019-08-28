import React from "react";
import "./ThemeA.css";

export default function ThemeA({
  children = null
}: {
  children?: React.ReactNode | React.ReactNodeArray;
}) {
  return <>{children}</>;
}

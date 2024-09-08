import { PropsWithChildren } from "react";
import "./theme.scss";

const Theme = ({
  children,
  accentColor = "blue",
}: PropsWithChildren<{
  accentColor?: "green" | "blue" | "red";
}>) => {
  return <div data-accent-color={accentColor}>{children}</div>;
};

export default Theme;

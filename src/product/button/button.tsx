import { ButtonHTMLAttributes } from "react";
import css from "./button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button = ({ children }: Props) => {
  return <button className={`${css.button} ${css.primary}`}>{children}</button>;
};

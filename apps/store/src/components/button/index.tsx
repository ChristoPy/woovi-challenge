import { MouseEvent } from "react";

export interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  iconRight?: JSX.Element;
  full?: boolean;
  disabled?: boolean;
}

const CLASSES = "text-white font-bold py-2 px-4 rounded inline-flex items-center transition-all duration-300 ease-in-out";
const ENABLED_BG_CLASS = "bg-green-500 hover:bg-green-700";
const DISABLED_BG_CLASS = "bg-green-600 cursor-not-allowed opacity-70";

export default function Button({ text, onClick, iconRight, full, disabled }: ButtonProps) {
  const bgClass = disabled ? DISABLED_BG_CLASS : ENABLED_BG_CLASS;
  return (
    <button disabled={disabled} className={`${CLASSES} ${bgClass} ${full ? "w-full" : ""}`} onClick={onClick}>
      <span className="w-full text-center">{text}</span>
      {iconRight}
    </button>
  )
};

import { MouseEvent } from "react";

export interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  iconRight?: JSX.Element;
  full?: boolean;
}

const CLASSES = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-all duration-300 ease-in-out"

export default function Button({ text, onClick, iconRight, full }: ButtonProps) {
  return (
    <button className={`${CLASSES} ${full ? "w-full" : ""}`} onClick={onClick}>
      <span className="w-full text-center">{text}</span>
      {iconRight}
    </button>
  )
};

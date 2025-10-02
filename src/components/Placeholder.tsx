import { cloneElement } from "react";
import { LucideMessageSquareWarning } from "lucide-react";

type PlaceholderProps = {
  message: string;
  button?: React.ReactElement;
  icon?: React.ReactElement;
};

const iconStyles = { className: "size-15" };

export default function Placeholder({
  message,
  button = <div className="invisible h-[35px]" />,
  icon = <LucideMessageSquareWarning />,
}: PlaceholderProps) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-3.5">
      {cloneElement(icon, iconStyles)}
      <p className="text-center text-xl font-semibold">{message}</p>
      {button}
    </section>
  );
}

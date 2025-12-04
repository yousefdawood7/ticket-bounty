import { LucideLoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Spinner({ className }: { className?: string }) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <LucideLoaderCircle
        className={cn("size-12 animate-spin", className || "")}
      />
    </div>
  );
}

"use client";

import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  label: string;
  isPending?: boolean;
  className?: string;
};

export default function SubmitButton({
  label,
  className,
  isPending,
}: SubmitButtonProps) {
  return (
    <Button
      className={cn(
        "text-background w-full text-lg font-semibold tracking-tight",
        className || "",
      )}
      disabled={isPending}
    >
      {isPending ? <Spinner className="size-6" /> : label}
    </Button>
  );
}

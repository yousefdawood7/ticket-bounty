"use client";

import Placeholder from "@/components/Placeholder";
import { Button } from "@/components/ui/button";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Placeholder
      message={error.message || ""}
      button={
        <Button variant="outline" onClick={reset}>
          Try again
        </Button>
      }
    />
  );
}

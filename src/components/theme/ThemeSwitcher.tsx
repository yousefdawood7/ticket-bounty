"use client";

import { useTheme } from "next-themes";
import { LucideMoon, LucideSun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  function handleSwitchTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <Button variant={"outline"} size={"icon"} onClick={handleSwitchTheme}>
      <LucideSun className="scale-100 rotate-0 transition-transform! duration-250 dark:scale-0 dark:rotate-90" />
      <LucideMoon className="absolute scale-0 rotate-90 transition-transform! duration-250 dark:scale-100 dark:rotate-0" />
    </Button>
  );
}

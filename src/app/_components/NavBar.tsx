import Link from "next/link";
import { LucideKanban } from "lucide-react";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import { buttonVariants } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header className="bg-background/95 fixed inset-x-0 top-0 border-b backdrop-blur-lg">
      <nav className="flex items-center justify-between px-10 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-semibold"
        >
          <LucideKanban className="stroke-3" />
          <span>TicketBounty</span>
        </Link>

        <aside className="flex items-center gap-2.5">
          <ThemeSwitcher />
          <Link
            className={buttonVariants({
              className: "text-lg font-semibold text-zinc-900",
            })}
            href={"/tickets"}
          >
            Tickets
          </Link>
        </aside>
      </nav>
    </header>
  );
}

import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-100">
      <div className="mx-container">
        <div className="py-2.5 px-5">
          <div className="border border-primary bg-background h-12 flex items-center justify-between">
            <button
              type="button"
              className="flex items-center gap-2 px-5 border-r border-primary h-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-xl font-normal"
            >
              <MenuIcon size={16} />
              Menu
            </button>
            <Link href="/" className="font-heading text-2xl">
              M & S
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 px-5 border-l border-primary h-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-xl font-normal"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="mx-container">
        <div className="py-2.5 px-5">
          <div className="border bg-background text-foreground h-12 flex items-center">
            <Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
              <DrawerTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-2 px-2.5 sm:px-5 border-r h-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-heading text-xl font-normal",
                    {
                      "bg-primary text-primary-foreground": isOpen,
                    },
                  )}
                >
                  {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
                  Menu
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="sr-only">
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                <ol className="flex flex-col gap-2.5 p-10">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Button
                        className="w-full justify-between"
                        showArrow
                        arrowTilt="right"
                      >
                        {link.name}
                      </Button>
                    </li>
                  ))}
                </ol>
              </DrawerContent>
            </Drawer>

            <Link
              href="/"
              className="font-heading text-2xl w-full text-center px-2.5"
            >
              Baba Tailors
            </Link>
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 px-5 border-l h-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-heading text-xl font-normal"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

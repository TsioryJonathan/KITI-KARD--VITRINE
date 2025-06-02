"use client";

import Link from "next/link";
import links from "@/constants/sidebarLinks";
import Image from "next/image";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import assets from "../../../public/images/assets";
import navLinks from "@/constants/navLinks";
import clsx from "clsx";
import { CartIcon } from "./CartIcon";

export default function Navbar() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const currentTheme = mounted ? (resolvedTheme || theme) : "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b  backdrop-blur bg-navbar supports-[backdrop-filter]:bg-background/60 px-10">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            src={currentTheme === "dark" ? assets.logoDark : assets.logoLight}
            alt="KITI'KARD LOGO"
            className="w-16 h-full"
          ></Image>
          <span>KITI'KARD</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-gray-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Cart */}
          <CartIcon />

          {/* User Account - Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="hidden md:flex">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/account">My Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/orders">My Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login">Login / Register</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src={currentTheme === "dark" ? assets.logoDark : assets.logoLight}
                    alt="KITI'KARD"
                    className={clsx("w-10 h-full")}
                  ></Image>
                  <span>KITI'KARD</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 ml-5">
                {links.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="flex py-2 text-sm font-medium hover:text-gray-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

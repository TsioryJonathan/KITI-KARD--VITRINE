"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import assets from "../../../public/images/assets";
import { footerLinks } from "@/constants/footerLinks";
import { socialLinks } from "@/constants/socialMediaLinks";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="w-full border-t bg-muted/40 dark:bg-muted/30">
      <div className="px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={theme === "dark" ? assets.logoDark : assets.logoLight} 
                alt="KITI'KARD Logo"
                className="w-10 h-full"
              ></Image>
              <span className="font-bold">KITI'KARD</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Modern business cards with NFC technology. Share your contact
              information with a simple tap.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-2 mt-2">
              {socialLinks.map((link, index) => {
                return (
                  <Link href={link.href} className={link.class} key={index}>
                    {link.icon}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="grid gap-2">
            <h3 className="text-sm font-medium">Products</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.products.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="grid gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.company.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="grid gap-2">
            <h3 className="text-sm font-medium">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest news and updates from our team.
            </p>
            <form className="flex gap-2 mt-2">
              <Input
                placeholder="Email address"
                type="email"
                className="max-w-lg flex-1"
              />
              <Button type="submit" className="bg-third text-text">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KITI'KARD. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Cookies Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

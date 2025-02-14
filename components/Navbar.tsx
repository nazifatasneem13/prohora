"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "./ui/ModeToggle/ModeToggle";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full shadow-lg dark:border-b dark:border-white/5 bg-stone-100 text-black dark:bg-black dark:text-white backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and brand */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-16 w-22">
                  <img
                    src="/logo.png"
                    alt="Prohora Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Main navigation */}
            <div className="hidden md:flex items-center justify-center space-x-6 flex-grow">
              <Link
                href="/submit-report"
                className="text-sm text-black dark:text-zinc-400 transition-all duration-300 ease-in-out hover:text-amber-600 dark:hover:text-white hover:scale-105"
              >
                Submit Report
              </Link>

              <Link
                href={"/track-report"}
                className="text-sm text-black dark:text-zinc-400 transition-all duration-300 ease-in-out hover:text-amber-600 dark:hover:text-white hover:scale-105"
              >
                Track Report
              </Link>
              <Link
                href={"/how-it-works"}
                className="text-sm text-black dark:text-zinc-400 transition-all duration-300 ease-in-out hover:text-amber-600 dark:hover:text-white hover:scale-105"
              >
                How It Works
              </Link>
              <Link
                href={"/resources"}
                className="text-sm text-black dark:text-zinc-400 transition-all duration-300 ease-in-out hover:text-amber-600 dark:hover:text-white hover:scale-105"
              >
                Resources
              </Link>
            </div>

            {/* Emergency button */}
            <div className="flex items-center space-x-4">
              <Link
                href={"/contact"}
                className="hidden md:block text-sm text-black hover:text-amber-800 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                Contact
              </Link>
              <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                Emergency: 999
              </button>

              <button
                className="md:hidden p-2 text-black hover:text-amber-800 dark:text-zinc-400 dark:hover:text-white"
                onClick={() => {
                  setIsMobileMenuOpen(true);
                }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="overflow-visible ">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => {
          setIsMobileMenuOpen(false);
        }}
      />
    </>
  );
}

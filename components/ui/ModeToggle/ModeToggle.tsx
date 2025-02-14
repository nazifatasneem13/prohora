"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is mounted before accessing the theme
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative flex items-center dark:bg-black justify-center "
          aria-label="Toggle theme"
        >
          {/* Sun Icon */}
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${
              theme === "light"
                ? "rotate-0 scale-100 text-yellow-500"
                : "rotate-90 scale-0 text-black"
            }`}
          />
          {/* Moon Icon */}
          <Moon
            className={`absolute h-[1.5rem] w-[1.5rem] transition-transform duration-300 ${
              theme === "dark"
                ? "rotate-0 scale-100 text-gray-300"
                : "-rotate-90 scale-0 text-black"
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-background text-foreground"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center "
        >
          <Sun className="mr-2 h-4 w-4 text-yellow-500" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center"
        >
          <Moon className="mr-2 h-4 w-4 text-gray-300" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center"
        >
          <svg
            className="mr-2 h-4 w-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-4.418 0-8 3.582-8 8 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8z"
            />
          </svg>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

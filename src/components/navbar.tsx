"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  return (
    <nav className="bg-[var(--nav-bg)] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-[var(--nav-text)] hover:text-[var(--hover)]">
            WorkerConnect
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              href="/jobs"
              className={`text-[var(--nav-text)] hover:text-[var(--hover)] transition-colors ${
                pathname === "/jobs" ? "font-semibold" : ""
              }`}
            >
              Find Jobs
            </Link>
            <Link
              href="/workers"
              className={`text-[var(--nav-text)] hover:text-[var(--hover)] transition-colors ${
                pathname === "/workers" ? "font-semibold" : ""
              }`}
            >
              Find Workers
            </Link>

            {status === "loading" ? (
              <div className="w-8 h-8 bg-[var(--hover)] rounded-full animate-pulse" />
            ) : session ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="text-[var(--nav-text)] hover:text-[var(--hover)] transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-[var(--hover)] text-white px-4 py-2 rounded-md hover:bg-[#27272b] transition-all duration-300"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/signin"
                  className="text-[var(--nav-text)] hover:text-[var(--hover)] transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-[var(--hover)] text-white px-4 py-2 rounded-md hover:bg-[#27272b] transition-all duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 
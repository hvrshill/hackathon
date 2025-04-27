"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="max-w-md w-full space-y-8 p-8 bg-[var(--nav-bg)] rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--nav-text)]">
            Authentication Error
          </h2>
          <p className="mt-2 text-[var(--nav-text)] opacity-80">
            {error === "Configuration" && "There is a problem with the server configuration."}
            {error === "AccessDenied" && "You do not have permission to sign in."}
            {error === "Verification" && "The verification link was invalid or has expired."}
            {!error && "An error occurred during authentication."}
          </p>
          <div className="mt-6">
            <Link
              href="/auth/signin"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-[var(--black-primary)] bg-[var(--yellow-primary)] hover:bg-[var(--yellow-secondary)] transition-colors"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
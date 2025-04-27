"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useApi } from "@/lib/hooks/useApi";

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["CLIENT", "WORKER"]),
});

type SignUpForm = z.infer<typeof signUpSchema>;

interface RegistrationResponse {
  success: boolean;
  message: string;
}

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  const { post } = useApi<RegistrationResponse>();

  const onSubmit = async (data: SignUpForm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await post("/api/auth/register", data);
      if (!response.error) {
        router.push("/auth/signin");
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md space-y-8 bg-[var(--card-bg)] p-6 sm:p-8 rounded-2xl shadow-xl">
        <div>
          <h2 className="text-center text-3xl font-bold text-[var(--foreground)]">
            Create your account
          </h2>
          <p className="mt-3 text-center text-sm text-[var(--foreground)] opacity-80">
            Or{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-[var(--accent)] hover:text-[var(--hover)] transition-colors"
            >
              sign in to your account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Full Name
              </label>
              <input
                id="name"
                {...register("name")}
                type="text"
                className="appearance-none relative block w-full px-4 py-3 border-2 border-[var(--foreground)] bg-[var(--input-bg)] text-[var(--foreground)] rounded-lg placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Email address
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                className="appearance-none relative block w-full px-4 py-3 border-2 border-[var(--foreground)] bg-[var(--input-bg)] text-[var(--foreground)] rounded-lg placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Password
              </label>
              <input
                id="password"
                {...register("password")}
                type="password"
                className="appearance-none relative block w-full px-4 py-3 border-2 border-[var(--foreground)] bg-[var(--input-bg)] text-[var(--foreground)] rounded-lg placeholder-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors"
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                I am a...
              </label>
              <select
                id="role"
                {...register("role")}
                className="appearance-none relative block w-full px-4 py-3 border-2 border-[var(--foreground)] bg-[var(--input-bg)] text-[var(--foreground)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors"
              >
                <option value="CLIENT">Client - I want to hire workers</option>
                <option value="WORKER">Worker - I am looking for work</option>
              </select>
              {errors.role && (
                <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border-2 border-transparent text-base font-medium rounded-lg text-[var(--nav-text)] bg-[var(--nav-bg)] hover:bg-[var(--hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[var(--nav-text)]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                "Create account"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 
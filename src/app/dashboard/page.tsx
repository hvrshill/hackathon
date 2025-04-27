"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, {session?.user?.name}!
        </h1>
        <p className="mt-2 text-gray-600">
          {session?.user?.role === "WORKER"
            ? "Find jobs that match your skills"
            : "Post jobs and find skilled workers"}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {session?.user?.role === "WORKER" ? (
            <>
              <Link
                href="/jobs"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">Browse Jobs</h2>
                <p className="text-gray-600">
                  Find jobs that match your skills and location
                </p>
              </Link>
              <Link
                href="/profile"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
                <p className="text-gray-600">
                  Update your skills, experience, and availability
                </p>
              </Link>
              <Link
                href="/jobs/accepted"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">Accepted Jobs</h2>
                <p className="text-gray-600">
                  View and manage your accepted jobs
                </p>
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/jobs/new"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">Post a Job</h2>
                <p className="text-gray-600">
                  Create a new job posting to find workers
                </p>
              </Link>
              <Link
                href="/jobs"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">Your Jobs</h2>
                <p className="text-gray-600">
                  View and manage your posted jobs
                </p>
              </Link>
              <Link
                href="/workers"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">Find Workers</h2>
                <p className="text-gray-600">
                  Browse available workers in your area
                </p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 
"use client";

import { useEffect } from 'react';
import { useApi } from '@/lib/hooks/useApi';

interface Job {
  id: string;
  title: string;
  description: string;
  budget: number;
  location: string;
  status: string;
  category: string;
}

export default function JobsPage() {
  const { data: jobs, error, isLoading, get } = useApi<Job[]>();

  useEffect(() => {
    // Fetch jobs when component mounts
    get('/jobs');
  }, [get]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--foreground)]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[var(--foreground)] mb-8">Available Jobs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs?.map((job) => (
          <div
            key={job.id}
            className="bg-[var(--nav-bg)] rounded-lg shadow-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-[var(--nav-text)] mb-2">
              {job.title}
            </h2>
            <p className="text-[var(--nav-text)] opacity-80 mb-4">
              {job.description}
            </p>
            <div className="flex justify-between items-center text-[var(--nav-text)] opacity-60">
              <span>${job.budget}</span>
              <span>{job.location}</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-[var(--nav-text)] bg-[var(--background)] px-2 py-1 rounded text-sm">
                {job.category}
              </span>
              <span className="text-[var(--nav-text)] bg-[var(--background)] px-2 py-1 rounded text-sm">
                {job.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect with Skilled Workers in Your Area
          </h1>
          <p className="text-xl mb-8">
            Find reliable workers for your projects or get hired for your skills
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/auth/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Get Started
            </Link>
            <Link
              href="/jobs"
              className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose WorkerConnect?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
            <p className="text-gray-600">
              Simple and intuitive platform to connect workers with clients
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Verified Workers</h3>
            <p className="text-gray-600">
              All workers are verified and rated by previous clients
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
            <p className="text-gray-600">
              Safe and secure payment system for both workers and clients
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Masonry",
            "Plumbing",
            "Electrical",
            "Carpentry",
            "Painting",
            "Cleaning",
            "Gardening",
            "Moving",
          ].map((category) => (
            <div
              key={category}
              className="p-6 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

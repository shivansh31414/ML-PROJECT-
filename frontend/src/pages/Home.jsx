import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to ML-PROJECT
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        This app lets you input features, run predictions using our Flask + SQL backend,
        and visualize results instantly. It’s built to demonstrate a clean MVP flow:
        authentication, prediction, and visualization.
      </p>

      <div className="space-x-4">
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Login
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        Built with Flask, SQL, React, Vite, TailwindCSS, and Chart.js
      </footer>
    </div>
  );
}

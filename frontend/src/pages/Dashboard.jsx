import { useState } from "react";
import useAuth from "../hooks/useAuth";
import usePredict from "../hooks/usePredict";
import InputForm from "../components/InputForm";
import ResultCard from "../components/ResultCard";
import ChartView from "../components/ChartView";

export default function Dashboard() {
  const { token, logout } = useAuth();
  const { result, loading, error, runPrediction } = usePredict();
  const [features, setFeatures] = useState({ feature_a: "", feature_b: "", feature_c: "" });

  if (!token) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Unauthorized</h2>
        <p>Please login or signup to access the dashboard.</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await runPrediction(features);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Prediction Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Feature A"
          value={features.feature_a}
          onChange={(e) => setFeatures({ ...features, feature_a: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Feature B"
          value={features.feature_b}
          onChange={(e) => setFeatures({ ...features, feature_b: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Feature C"
          value={features.feature_c}
          onChange={(e) => setFeatures({ ...features, feature_c: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}
      {result !== null && (
        <>
          <ResultCard result={result} />
          <ChartView result={result} />
        </>
      )}
    </div>
  );
}

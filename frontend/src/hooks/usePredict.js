import { useState } from "react";
import { predict } from "../api/predict";

export default function usePredict() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runPrediction = async (features) => {
    setLoading(true);
    setError(null);
    try {
      const res = await predict(features);
      setResult(res.result);
    } catch (err) {
      setError(err.response?.data?.detail || "Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, runPrediction };
}

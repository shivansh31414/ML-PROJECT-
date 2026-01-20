import { useState } from "react";
import { predict } from "../api/predict";
import ResultCard from "./ResultCard";

export default function InputForm() {
  const [features, setFeatures] = useState({ feature_a: "", feature_b: "", feature_c: "" });
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await predict(features);
    setResult(data.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="number" placeholder="Feature A" value={features.feature_a}
               onChange={(e) => setFeatures({ ...features, feature_a: e.target.value })} />
        <input type="number" placeholder="Feature B" value={features.feature_b}
               onChange={(e) => setFeatures({ ...features, feature_b: e.target.value })} />
        <input type="number" placeholder="Feature C" value={features.feature_c}
               onChange={(e) => setFeatures({ ...features, feature_c: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Predict</button>
      </form>
      {result !== null && <ResultCard result={result} />}
    </div>
  );
}

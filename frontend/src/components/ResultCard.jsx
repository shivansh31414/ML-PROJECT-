export default function ResultCard({ result }) {
  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h2 className="text-xl font-bold">Prediction Result</h2>
      <p className="text-lg">{result}</p>
    </div>
  );
}

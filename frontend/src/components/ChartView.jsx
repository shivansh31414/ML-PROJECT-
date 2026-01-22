import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function ChartView({ result }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Prediction"],
        datasets: [
          {
            label: "Result",
            data: [result],
            backgroundColor: "rgba(59, 130, 246, 0.7)", // Tailwind blue-500
            borderColor: "rgba(59, 130, 246, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: "Prediction Result Visualization",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [result]);

  return (
    <div className="mt-6">
      <canvas ref={chartRef} />
    </div>
  );
}

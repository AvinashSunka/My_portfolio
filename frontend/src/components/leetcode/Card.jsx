import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function LeetCodeStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/coding/leetcode-stats/")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setStats(res.data[0]);
        }
      })
      .catch((err) => console.error("Failed to fetch LeetCode stats:", err));
  }, []);

  return (
    <div className="p-6 my-16 text-white flex justify-center">
      <div className="rounded-xl border border-white p-6 lg:w-2/3 bg-gray-900 shadow-md">
        <h2 className="text-3xl font-bold text-center mb-2">LeetCode Stats</h2>
        {stats ? <StatCard stats={stats} /> : <p className="text-center">Loading...</p>}
      </div>
    </div>
  );
}

const StatCard = ({ stats }) => {
  const total_easy = 500;
  const total_medium = 500;
  const total_hard = 500;

  const totalQuestions = total_easy + total_medium + total_hard;
  const progress = (stats.problems_solved / totalQuestions) * 100;

  const difficulties = [
    { label: "Easy", solved: stats.easy_solved, total: total_easy, color: "green" },
    { label: "Medium", solved: stats.medium_solved, total: total_medium, color: "yellow" },
    { label: "Hard", solved: stats.hard_solved, total: total_hard, color: "red" },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-40">
        <CircularProgressbar
          value={progress}
          text={`${stats.problems_solved} solved`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#08f",
            trailColor: "#333",
          })}
        />
      </div>
      <div className="text-center">
        <p className="font-semibold text-xl">{stats.username}</p>
        <p className="text-gray-400">{stats.ranking}</p>
      </div>

      <div className="w-full space-y-3">
        {difficulties.map((diff, i) => {
          const width = diff.total > 0 ? (diff.solved / diff.total) * 100 : 0;
          return (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className={`text-${diff.color}-400`}>{diff.label}</span>
                <span className={`text-${diff.color}-400`}>
                  {diff.solved} / {diff.total}
                </span>
              </div>
              <div className="w-full h-4 bg-gray-700 rounded-full">
                <div
                  className={`bg-${diff.color}-400 h-full rounded-full`}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeetCodeStats;

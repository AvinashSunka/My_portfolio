import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/coding/leetcode-stats/")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setStats(res.data[0]);
        }
      })
      .catch((err) => console.error("Failed to fetch LeetCode stats:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 px-4 md:px-8" id="leetcode-stats">
      <div className=" mx-auto backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-7xl text-center mb-20 font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">LeetCode Stats</h2>
        {loading ? (
          <p className="text-center text-black dark:text-white">Loading...</p>
        ) : stats ? (
          <StatsContent stats={stats} />
        ) : (
          <p className="text-center text-red-500">No data available.</p>
        )}
      </div>
    </section>
  );
};

const StatsContent = ({ stats }) => {
  const total_easy = stats.easy_total;
  const total_medium = stats.medium_total;
  const total_hard = stats.hard_total;

  const totalQuestions = total_easy + total_medium + total_hard;
  const progress = (stats.problems_solved / totalQuestions) * 100;

  const difficulties = [
    { label: "Easy", solved: stats.easy_solved, total: total_easy, color: "green" },
    { label: "Medium", solved: stats.medium_solved, total: total_medium, color: "yellow" },
    { label: "Hard", solved: stats.hard_solved, total: total_hard, color: "red" },
  ];

  return (
    <div className="flex items-center gap-10">
      {/* Profile and Overall Progress */}
      <div className="flex flex-col md:flex-row gap-10 items-center w-full justify-center">
        {/* Circular Progress */}
  <div className="w-48 md:w-96">
  <CircularProgressbar
    value={progress}
    text={`${stats.problems_solved} Solved`}
    styles={buildStyles({
      textColor: "var(--text-color)",
      pathColor: "var(--path-color)",
      trailColor: "var(--trail-color)",
    })}
  />
</div>

<style jsx global>{`
  :root {
    --text-color: #1f2937;      /* Gray-800 */
    --path-color: #3b82f6;      /* Blue-500 */
    --trail-color: #e5e7eb;     /* Gray-200 */
  }
  .dark {
    --text-color: #ffffff;
    --path-color: #60a5fa;      /* Blue-400 */
    --trail-color: #374151;     /* Gray-700 */
  }
`}</style>


        {/* User Info */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">{stats.username}</h3>
          <p className="dark:text-gray-500 text-gray-400">{stats.ranking}</p>
          <p className="text-2xl dark:text-gray-400 text-gray-500 italic">
            Total Questions Considered: {totalQuestions}
          </p>
        </div>
      </div>

      {/* Difficulty Bars */}
      <div className="w-full space-y-6">
        {difficulties.map((diff, i) => {
          const width = diff.total > 0 ? (diff.solved / diff.total) * 100 : 0;
          const colorMap = {
            green: "bg-green-400",
            yellow: "bg-yellow-400",
            red: "bg-red-400"
          };

          return (
            <div key={i}>
              <div className="flex justify-between text-3xl mb-1 font-medium">
                <span className={`text-${diff.color}-400`}>{diff.label}</span>
                <span className={`text-${diff.color}-400`}>
                  {diff.solved} / {diff.total}
                </span>
              </div>
              <div className="w-full h-6 md:h-10 dark:bg-gray-300 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`${colorMap[diff.color]} h-full rounded-full transition-all duration-500`}
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

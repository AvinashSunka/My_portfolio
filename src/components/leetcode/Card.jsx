import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import slay from '../../assets/images/3d/profile_pic.jpg';
import leetcode from '../../assets/images/leetcode.png';
import './Card.css'



function LeetCodeStats() {

  const [stats, setStats] = useState(null);
  const [calendarData, setCalendarData] = useState([]);
  const username = "sunka_Avinash";

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  useEffect(() => {
    fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            matchedUser(username: "${username}") {
              submissionCalendar
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const rawCalendar = JSON.parse(data.data.matchedUser.submissionCalendar);
        const formattedData = Object.keys(rawCalendar).map((date) => ({
          day: new Date(parseInt(date) * 1000).toISOString().split("T")[0],
          value: rawCalendar[date],
        }));
        setCalendarData(formattedData);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3 my-16 text-white p-6 ">
      <div className=" rounded-xl border border-white p-6 lg:w-2/3 h-fit shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_10px_#08f,0_0_15px_#08f]">
        <div className="flex items-center space-x-4 w-full m-4">
          <img
            src={slay}
            alt="LeetCode Avatar"
            className="w-28 h-auto rounded-full border-2 border-yellow-400"
          />
          <div className="w-full flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold">User id : {username}</h2>
            <p className="text-yellow-400 font-bold items-center w-full">LeetCode Stats & Activity</p>
          </div>
        </div>

        {stats ? (
          <StatCard stats={stats} />
        ) : (
          <p className="text-gray-400 text-center animate-pulse">Loading stats...</p>
        )}
      </div>
    </div>
  );
}

const StatCard = ({ stats }) => {
  const progress = (stats.totalSolved / stats.totalQuestions) * 100;

  return (
    <div className="flex items-center space-x-4 p-4 shadow-lg rounded-lg w-full bg-gray-900">
      {/* Circular Progress Container */}
      <div className="w-1/3 h-auto flex-shrink-0 relative">
        <div className="glowing-progress">
          <CircularProgressbar
            value={progress}
            text={`${stats.totalSolved} / ${stats.totalQuestions}`}
            styles={buildStyles({
              textColor: "#fff", // White text color
              pathColor: "#08f", // Neon blue path
              trailColor: "rgba(255, 255, 255, 0.2)", // Faded white trail
              textSize: "16px",
              strokeLinecap: "round",
              pathTransitionDuration: 0.5,
              trailWidth: 5,
            })}
          />
        </div>
      </div>
  
      {/* User Stats Container */}
      <div className="flex-1">
        <div className="font-semibold text-lg text-white">{stats.username}</div>
        <div className="text-gray-400"># {stats.ranking}</div>
  
        {/* Difficulty Level Progress Bars */}
        <div className="mt-2">
          {["Easy", "Medium", "Hard"].map((difficulty, index) => {
            const colors = ["text-green-400", "text-yellow-400", "text-red-400"];
            const bgColors = ["bg-green-400", "bg-yellow-400", "bg-red-400"];
            const solved = [stats.easySolved, stats.mediumSolved, stats.hardSolved];
            const total = [stats.totalEasy, stats.totalMedium, stats.totalHard];
  
            return (
              <div key={index} className="mt-2">
                <div className="flex justify-between">
                  <span className={`${colors[index]} text-white`}>{difficulty}</span>
                  <span className={`${colors[index]}`}>{solved[index]} / {total[index]}</span>
                </div>
                <div className="w-full bg-gray-700 h-6 rounded-full overflow-hidden mt-1">
                  <div
                    className={`${bgColors[index]} h-full transition-all`}
                    style={{ width: `${(solved[index] / total[index]) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  
};

export default LeetCodeStats;
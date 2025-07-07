import React from 'react';
import Card from './Card';

import Bussiness from '../../assets/images/Bussiness.jpg';
import Fest from '../../assets/images/fest.jpg';
import Search from '../../assets/images/Search.jpg';
import Expense from '../../assets/images/Expense.avif';
import Puzzle from '../../assets/images/codepuzzle.png';

const allProjects = [
  {
    image: Bussiness,
    text: 'Internship Project',
    link: 'https://it-portfolio-beta.vercel.app/',
    title: 'Business Portfolio'
  },
  {
    image: Fest,
    text: 'Fest Project',
    link: 'https://silver9876.github.io/matrix-website/',
    title: 'Fest Website'
  },
  {
    image: Search,
    text: 'Personal Project',
    link: 'https://silver9876.github.io/image_search_app/',
    title: 'Image Search App'
  },
  {
    image: Expense,
    text: 'Open Source Project',
    link: 'https://shrey141102.github.io/Javascript-projects/expense%20tracker/index.html',
    title: 'Expense Tracker'
  },
  {
    image: Puzzle,
    text: 'Code Puzzle Game',
    link: 'https://silver9876.github.io/code-puzzle-game/',
    title: 'Code Puzzle Game'
  }
];

const Projects = () => {
  const latestProjects = allProjects.slice(0, 4);

  return (
    <section className="w-full py-20 px-4 md:px-12" id="PROJECTS">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-7xl text-center mb-5 font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Latest Projects
        </h2>
        <p className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          A few highlights from my recent work
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {latestProjects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            text={project.text}
            link={project.link}
            title={project.title}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center flex justify-end">
        <button
          to="/projects" // Update this route to your all-projects page
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:brightness-110 text-black dark:text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 w-auto"
        >
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;

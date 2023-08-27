import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
const SkillsPage = () => {
  Aos.init();
  const skills = [
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 85 },
    { name: "JavaScript", progress: 80 },
    { name: "React", progress: 85 },
    { name: "Node.js", progress: 75 },
    { name: "Express.js", progress: 70 },
    { name: "Next.js", progress: 80 },
    { name: "TypeScript", progress: 50 },
    { name: "Redux", progress: 80 },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl text-center font-bold mb-4"> Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            key={skill.name}
            className="bg-white shadow-md rounded-md p-4"
          >
            <h2 className="text-2xl font-bold mb-2">{skill.name}</h2>
            <div className="h-3 bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-green-700"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
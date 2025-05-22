import { useState } from "react";

export default function Skill() {
  const [skill, setSkill] = useState("technical");
  
  const skills = {
    technical: [
      { name: "JavaScript", prof: 90 },
      { name: "Node.js", prof: 75 },
      { name: "React", prof: 65 },
      { name: "HTML & CSS", prof: 90 },
      { name: "Bootstrap", prof: 50 },
      { name: "MongoDB", prof: 75 },
    ],
    soft: [
      { name: "Communication", prof: 75 },
      { name: "Leadership", prof: 65 },
      { name: "Team Player", prof: 65 },
      { name: "Time Management", prof: 50 },
      { name: "Adaptability", prof: 85 },
      { name: "Creativity", prof: 79 },
    ],
  };

  const getProfiencyLabel = (prof) => {
    if (prof >= 90) return "Expert";
    if (prof >= 75) return "Advanced";
    if (prof >= 60) return "Intermediate";
    return "Beginner";
  };

  const getColorByProficiency = (prof) => {
    if (prof >= 90) return "from-green-500 to-emerald-600";
    if (prof >= 75) return "from-indigo-500 to-purple-600";
    if (prof >= 60) return "from-yellow-500 to-orange-600";
    return "from-red-500 to-pink-600";
  };

  return (
    <div id="skills" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSkill("technical")}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              skill === "technical"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              skill === "soft"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[skill].map((skillItem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {skillItem.name}
                </h3>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  skillItem.prof >= 90 ? 'bg-green-100 text-green-800' :
                  skillItem.prof >= 75 ? 'bg-indigo-100 text-indigo-800' :
                  skillItem.prof >= 60 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {getProfiencyLabel(skillItem.prof)}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-700">
                    Proficiency
                  </span>
                  <span className="text-sm font-bold text-indigo-600">
                    {skillItem.prof}%
                  </span>
                </div>
                
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getColorByProficiency(skillItem.prof)} rounded-full transition-all duration-500 ease-out`}
                    style={{ 
                      width: `${skillItem.prof}%`,
                      animation: `slideIn 1s ease-out ${index * 0.1}s both`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: ${skills[skill].map(s => s.prof)}%;
          }
        }
      `}</style>
    </div>
  );
}
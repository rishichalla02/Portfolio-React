import React, { useState, useEffect } from "react";

function About() {
  const fullText = "Hi, I'm Rishi Challa";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            {typedText}
            <span className="border-r-2 border-indigo-600 animate-pulse ml-1"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a MERN Stack Developer who recently completed my Bachelor's
            degree in Information Technology at Shantilal Shah Engineering
            College, Bhavnagar, with a CGPA of 8.20. I've developed a strong
            foundation in full-stack web development using MongoDB, Express.js,
            React.js, and Node.js. I recently completed a 3-month online
            internship at Silver Touch Technologies as a Software Developer
            Intern, where I built a student monitoring system using React.js and
            Firebase. Alongside my technical skills, I possess strong
            communication abilities and enjoy working in collaborative
            environments to build efficient and scalable web applications.
          </p>
          {/* Stats Strip */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-16">
            {[
              { label: "CGPA", value: "8.20" },
              { label: "Certificates", value: "100+" },
              { label: "Projects", value: "9" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-indigo-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src="./Photo.jpg"
            alt="Profile"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Professional Journey
          </h2>
          <div className="relative max-w-2xl mx-auto pl-8 border-l-2 border-indigo-200 space-y-10">
            {[
              {
                year: "2023",
                title: "Started Web Development",
                desc: "Began learning fundamentals through YouTube and built basic first projects.",
              },
              {
                year: "2024 – 2025",
                title: "MERN Stack Focus",
                desc: "Deepened skills in MongoDB, Express.js, React.js, and Node.js while building full-stack projects.",
              },
              {
                year: "Now",
                title: "CodoMax Internship Personal Project",
                desc: "Completed Blog-Post-Thoughts, a internship project in my learning journey a full stack project with Google AdSense.",
              },
            ].map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute left-[-2.6rem] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow"></span>
                <span className="text-sm font-semibold text-indigo-600">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              Creating beautiful and responsive user interfaces with HTML, CSS,
              JavaScript and React
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Backend Development
            </h3>
            <p className="text-lg text-gray-600">
              Building robust and scalable server solutions with Node.js, as
              Database work there is MongoDB
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Online Internship on AI: Transformative Learning
              </h3>
              <p className="text-lg text-gray-600">
                Attended many WorkShops like AI & Green Skills, React Portfolio
                Bootcamp
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                100+ Certificates of Technical & Non - Techincal Activites
              </h3>
              <p className="text-lg text-gray-600">
                Gaining Knowledge and Badges from Microsoft Learn & IBM
                SkillsBuild Program
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always exploring new technologies and methodologies to stay at
                the forefront of web development
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Santander",
      period: "Aug 2023 - Present",
      highlights: [
        "Leading frontend architecture and development for high-traffic applications serving 20M+ users.",
        "Working with React, Vue, Flutter, and Ionic across multiple platforms.",
        "Responsible for CI/CD pipelines, automated testing, and code reviews.",
      ],
    },
    {
      id: 2,

      role: "Senior Frontend Developer",
      company: "MJV Technology & Innovation",
      period: "Jan 2021 - Jul 2023",
      highlights: [
        "Migrated legacy systems from Vue.js to React.",
        "Implemented SOLID principles and Clean Architecture.",
        "Integrated GraphQL and REST APIs in Santander projects.",
      ],
    },
    {
      id: 3,

      role: "Frontend Developer",
      company: "Pagtel",
      period: "Jun 2019 - Jan 2021",
      highlights: [
        "Developed Uber SIM product website using React and C#.",
        "Implemented OAuth/JWT authentication and Testing Library.",
        "Focused on scalable and UX-friendly solutions.",
      ],
    },
    {
      id: 4,

      role: "Frontend Developer",
      company: "Corebiz",
      period: "Jun 2017 - Jun 2019",
      highlights: [
        "Created e-commerce platforms for Motorola, Sony, and Grupo Boticário using VTEX.",
        "Applied agile practices, performance optimization, and SEO techniques.",
        "Delivered over 60 custom frontend projects.",
      ],
    },
    {
      id: 5,

      role: "Junior Frontend Developer",
      company: "Corebiz",
      period: "Jun 2016 - Jun 2017",
      highlights: [
        "Maintained and refactored legacy frontend codebases.",
        "Contributed to small features and bug fixes.",
        "Learned agile workflows and git versioning best practices.",
      ],
    },
  ];

  return (
    <div className="py-6 bg-white px-6">
      <div className="space-y-4 max-w-2xl mx-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
            Experience
          </h3>
          <div className="h-px w-full bg-gray-200 mt-2" />
        </div>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="relative pl-4 border-l-2 border-gray-200">
                <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />

                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-md font-medium text-gray-900">
                      {exp.role}
                    </h4>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    {exp.company}
                  </p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    {exp.highlights.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

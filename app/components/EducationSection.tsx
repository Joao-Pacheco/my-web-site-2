const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universidade Paulista - UNIP",
      period: "2017 - 2020",
      details: [
        "Completed core studies in algorithms, data structures, and software engineering.",
        "Developed academic projects using Java, C, and web technologies.",
        "Participated in group software development projects and presentations.",
      ],
    },
    {
      degree: "Computer Technician - Programming Focus",
      institution: "ETEC - Escola Técnica Estadual de São Paulo",
      period: "2015 - 2016",
      details: [
        "Hands-on training in software development fundamentals.",
        "Gained experience in HTML, CSS, JavaScript, and database design.",
      ],
    },
  ];

  return (
    <div className="py-6 bg-white px-6">
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
            Education
          </h3>
          <div className="h-px w-full bg-gray-200 mt-2" />
        </div>
        <div className="space-y-5 mt-4">
          {education.map((edu) => (
            <div key={edu.institution} className="relative">
              <div className="relative pl-4 border-l-2 border-gray-200">
                <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />
                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-md font-medium text-gray-900">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-gray-500">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    {edu.institution}
                  </p>
                  <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                    {edu.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
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

export default EducationSection;

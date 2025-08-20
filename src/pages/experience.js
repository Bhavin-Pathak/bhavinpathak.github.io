import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card.js"
import { Badge } from "../components/badge.js"

export default function Experience() {
  const experiences = [
    {
      company: "Meril",
      position: "Software Developer SDE-1",
      period: "Dec 2024 - Present",
      description:
        "Worked cross-functionally with AI & product teams to design and ship smart software systems.",
      technologies: ["Node.js", "React.js", "AI/LLMs", "Express.js", "PostgreSQL"],
      responsibilities: [
        "Collaborated with AI and product teams to deliver intelligent software systems",
        "Developed secure and scalable backend services",
        "Built interactive and dynamic UIs using React.js",
        "Integrated AI/LLMs into real-world applications",
        "Automated workflows to improve software intelligence",
      ],
    },
    {
      company: "UB Softec",
      position: "Mobile Application Developer",
      period: "Apr 2024 - Oct 2024",
      description:
        "Worked as a collaborative junior developer, contributing to mobile app and backend development.",
      technologies: ["Flutter", "Node.js", "Firebase", "MongoDB"],
      responsibilities: [
        "Contributed to mobile app development projects with Flutter",
        "Assisted in backend development and API integrations",
        "Collaborated with senior developers to implement features",
        "Fixed bugs and optimized app performance",
        "Gained hands-on experience in agile teamwork",
      ],
    },
    {
      company: "RnD Technosoft",
      position: "iOS App Developer",
      period: "Jun 2022 - Mar 2024",
      description:
        "Developed and published iOS applications on the App Store and Android applications on Play Store.",
      technologies: ["Swift", "iOS SDK", "Xcode", "App Store Connect", "Play Console"],
      responsibilities: [
        "Developed and maintained multiple iOS apps",
        "Handled app submissions and compliance with App Store and Play Store policies",
        "Collaborated with design and backend teams for feature implementation",
        "Debugged and optimized app performance for smooth user experience",
        "Ensured adherence to Apple and Google publishing guidelines",
      ],
    },
    {
      company: "Earth Infotech",
      position: "Computer Technical Specialist",
      period: "Apr 2020 - May 2022",
      description:
        "Provided computer hardware and technical support services, specializing in custom systems and OS installations.",
      technologies: ["Windows", "Linux", "Hardware Troubleshooting", "Networking"],
      responsibilities: [
        "Built and configured custom computer systems for clients",
        "Installed and upgraded operating systems and software",
        "Performed hardware diagnostics and troubleshooting",
        "Provided IT support for local clients and businesses",
        "Ensured smooth deployment of updated systems",
      ],
    },
  ];


  return (
    <section id="experience" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-1xl mx-auto">
            Self-taught developer passionate about building scalable and intelligent software solutions.
          </p>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <Badge variant="outline" className="md:ml-auto w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="text-lg font-medium text-primary">{exp.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Layers, Globe, Smartphone, GitBranch, Cloud, Cpu } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/card.js";
import { Tabs, TabsList, TabsTrigger } from "../components/tabs.js";
import { Button } from "../components/button.js";
import { Badge } from "../components/badge.js";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setRepos([
        {
          id: 1,
          name: "Clario",
          description:
            "Clario is a sleek and modern text summarization application built with React, powered by the OpenAI API, designed to transform lengthy text into concise, meaningful summaries with ease",
          html_url: "https://github.com/Bhavin-Pathak/clario.git",
          homepage: "https://bhavin-pathak.github.io/clario/",
          topics: [
            "Javascript",
            "ReactJS",
            "Tailwindcss",
            "OpenAI",
            "ChatGPT-API_KEY",
          ],
          language: "JavaScript",
        },
        {
          id: 2,
          name: "Atmos-alert",
          description:
            "A modern, responsive weather application built with React that provides current weather conditions and forecasts using the OpenWeatherMap API",
          html_url: "https://github.com/Bhavin-Pathak/atmos-alert.git",
          homepage: "https://bhavin-pathak.github.io/atmos-alert/",
          topics: [
            "Javascript",
            "ReactJS",
            "Tailwindcss",
            "OpenWeather API_KEY",
          ],
          language: "JavaScript",
        },
        {
          id: 3,
          name: "Inspirebox",
          description:
            "A beautiful, responsive Random Quote Generator built with React, Tailwind CSS Features stunning neon light effects and glassmorphism design.",
          html_url: "https://github.com/Bhavin-Pathak/inspirebox.git",
          homepage: "https://bhavin-pathak.github.io/inspirebox/",
          topics: ["Javascript", "ReactJS", "Tailwindcss", "Public_API"],
          language: "JavaScript",
        },
        {
          id: 4,
          name: "BMIwise",
          description:
            "A modern, responsive Body Mass Index (BMI) calculator built with React and styled with TailwindCSS. This application helps users calculate their BMI and understand their health status with an intuitive, clean interface",
          html_url: "https://github.com/Bhavin-Pathak/bmiwise.git",
          homepage: "https://bhavin-pathak.github.io/bmiwise/",
          topics: ["Javascript", "ReactJS", "Tailwindcss"],
          language: "JavaScript",
        },
        {
          id: 5,
          name: "Evernotes",
          description:
            "A lightweight, notes app that lets users create, edit, and delete their notes with ease.",
          html_url: "https://github.com/Bhavin-Pathak/evernotes.git",
          homepage: "https://bhavin-pathak.github.io/evernotes/",
          topics: ["Javascript", "ReactJS", "Tailwindcss"],
          language: "JavaScript",
        },
        {
          id: 6,
          name: "Split-Digits",
          description:
            "Kids Game When It's Match Perfect Pear Of Number Then Number Will Apear On Screen Otherwise Split Box And Find Correct One !!",
          html_url: "https://github.com/Bhavin-Pathak/Split-Digits.git",
          homepage: "",
          topics: ["Swift", "SwiftUI", "XCode", "MVVM"],
          language: "iOS",
        },
        {
          id: 7,
          name: "USER's From JSONPlaceholder",
          description:
            "A list of users data from JSONPlaceholder API Endpoint Where You Can search users with their username or name and get userdetails",
          html_url:
            "https://github.com/Bhavin-Pathak/UserNFT-JsonPlaceholder.git",
          homepage: "",
          topics: ["Swift", "SwiftUI", "XCoode", "MVVM"],
          language: "iOS",
        },
        {
          id: 8,
          name: "Authentication Kit",
          description:
            "A Modern Animated Login_Signup_ForgetPassword_ResetPassword Kit With Validations",
          html_url: "https://github.com/Bhavin-Pathak/Login_Kit.git",
          homepage: "",
          topics: ["Swift", "SwiftUI", "Xcode", "MVVM"],
          language: "iOS",
        },
        {
          id: 9,
          name: "Hamburger_Kit",
          description:
            "Hamburger Menu Left Side Navigatiion Slider With Hero Animations",
          html_url: "https://github.com/Bhavin-Pathak/Navigation-Slider-.git",
          homepage: "",
          topics: ["Swift", "SwiftUI", "XCode", "MVVM"],
          language: "iOS",
        },
        {
          id: 10,
          name: "Flutter-Projects",
          description: "Flutter Mini-Projects Ideas ------->>>>>",
          html_url: "https://github.com/Bhavin-Pathak/Flutter-Projects.git",
          homepage: "",
          topics: ["Dart", "Flutter", "MVC", "MVVM"],
          language: "Flutter",
        },
        {
          id: 11,
          name: "Portfolio",
          description:
            "A playground of ideas where I learn, build, and share code experiments — from prototypes to polished apps.",
          html_url:
            "https://github.com/Bhavin-Pathak/bhavin-pathak.github.io.git",
          homepage: "https://bhavin-pathak.github.io/",
          topics: ["Javascript", "ReactJS", "Tailwindcss"],
          language: "JavaScript",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Tech Icons for background
  const techIcons = [
    { Icon: Code, x: "10%", y: "15%", delay: 0.2 },
    { Icon: Database, x: "85%", y: "20%", delay: 0.4 },
    { Icon: Server, x: "15%", y: "75%", delay: 0.6 },
    { Icon: Layers, x: "80%", y: "70%", delay: 0.8 },
    { Icon: Globe, x: "20%", y: "45%", delay: 1.0 },
    { Icon: Smartphone, x: "75%", y: "45%", delay: 1.2 },
    { Icon: GitBranch, x: "12%", y: "60%", delay: 1.4 },
    { Icon: Cloud, x: "88%", y: "35%", delay: 1.6 },
    { Icon: Cpu, x: "50%", y: "85%", delay: 1.8 },
  ];

  const filteredRepos =
    activeTab === "all"
      ? repos
      : repos.filter((repo) => {
        const normalizedTab = activeTab.toLowerCase();
        return (
          repo.topics.some((topic) =>
            topic.toLowerCase().includes(normalizedTab)
          ) ||
          repo.language.toLowerCase().includes(normalizedTab)
        );
      });

  return (
    <section
      id="projects"
      className="relative pt-1 pb-10 px-4 md:px-6 lg:px-8 scroll-mt-16 overflow-hidden"
    >
      {/* Animated Tech Icons Background */}
      <div className="absolute inset-0 -z-10">
        {techIcons.map(({ Icon, x, y, delay }, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10 dark:opacity-20"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8,
              delay: delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16 text-foreground" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent full-stack development projects
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="iOS">iOS</TabsTrigger>
                  <TabsTrigger value="Flutter">Flutter</TabsTrigger>
                  <TabsTrigger value="JavaScript">JavaScript</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.length > 0 ? (
                filteredRepos.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="flex items-start justify-between">
                          <span>{repo.name}</span>
                          <Badge variant="outline">{repo.language}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground mb-4">
                          {repo.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {repo.topics.slice(0, 4).map((topic) => (
                            <Badge
                              key={topic}
                              variant="secondary"
                              className="text-xs"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Source
                          </a>
                        </Button>
                        {repo.homepage && (
                          <Button variant="default" size="sm" asChild>
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-muted-foreground">
                    No projects found for this category.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

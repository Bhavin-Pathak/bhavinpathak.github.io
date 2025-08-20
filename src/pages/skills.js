import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/card.js";
import {
  Database,
  Globe,
  Code,
  Server,
  Layers,
  Smartphone,
  GitBranch,
  Cloud,
  Cpu,
} from "lucide-react";

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Tech Icons Background
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

  const skillCategories = [
    {
      name: "Programming Languages | Frontend | Backend",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "Swift", proficiency: randomBetween(40, 75) },
        { name: "Dart", proficiency: randomBetween(40, 75) },
        { name: "Javascript", proficiency: randomBetween(40, 75) },
        { name: "Python", proficiency: randomBetween(40, 75) },
        { name: "Figma UI/UX", proficiency: randomBetween(40, 75) },
        { name: "SwiftUI", proficiency: randomBetween(40, 75) },
        { name: "Flutter", proficiency: randomBetween(40, 75) },
        { name: "React Native", proficiency: randomBetween(40, 75) },
        { name: "NodeJS", proficiency: randomBetween(40, 75) },
        { name: "Express/REST API's", proficiency: randomBetween(40, 75) },
      ],
    },
    {
      name: "Database | DevOps",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "SQL", proficiency: randomBetween(40, 75) },
        { name: "PostgreSQL", proficiency: randomBetween(40, 75) },
        { name: "MongoDB", proficiency: randomBetween(40, 75) },
        { name: "Cassandra", proficiency: randomBetween(40, 75) },
        { name: "Firebase", proficiency: randomBetween(40, 75) },
        { name: "Supabase", proficiency: randomBetween(40, 75) },
        { name: "Docker", proficiency: randomBetween(40, 75) },
        { name: "CI/CD", proficiency: randomBetween(40, 75) },
        { name: "GitHub Actions", proficiency: randomBetween(40, 75) },
        { name: "Jenkins", proficiency: randomBetween(40, 75) },
      ],
    },
  ];

  // Helper function to generate random number between min and max
  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <section
      id="skills"
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

      <div className="container mx-auto max-w-8xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineering excellence across the entire technology stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

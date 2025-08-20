import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/card.js";
import { Button } from "../components/button.js";
import {
  Linkedin,
  Code,
  Database,
  Server,
  Layers,
  Globe,
  Smartphone,
  GitBranch,
  Cloud,
  Cpu,
} from "lucide-react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Tech Icons (same as in Hero)
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

  return (
    <section
      id="about"
      className="relative pt-10 pb-10 px-4 md:px-6 lg:px-8 scroll-mt-16 overflow-hidden"
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

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mp-6"
          >
            <div className="relative h-[350px] md:h-[540px] rounded-xl overflow-hidden">
              <img
                src="/assets/1.png"
                alt="Bhavin Pathak - Full Stack Developer"
                className="w-[1080px] h-[1350px] max-w-full max-h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                style={{
                  aspectRatio: "1080/1350",
                  objectPosition: "center top",
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center order-2"
          >
            <Card className="w-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-4">Bhavin Pathak</h3>
                <p className="text-lg mb-4">
                  Full-stack developer specializing in AI-driven solutions,
                  cross-platform mobile apps, and scalable web applications.
                  With expertise in Node.js, React, and Flutter, I&apos;ve
                  delivered high-performance solutions for healthcare and
                  enterprise sectors.
                </p>
                <p className="text-lg mb-6">
                  My comprehensive experience spans the entire development
                  lifecycle, from concept to deployment, with published
                  applications on both iOS and Android platforms
                </p>

                <Button asChild className="w-full md:w-auto">
                  <a
                    href="https://www.linkedin.com/in/bhavin-pathak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

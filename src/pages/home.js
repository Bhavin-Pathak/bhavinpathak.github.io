import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Code, Database, Server, Layers, Globe, Smartphone,
  GitBranch, Cloud, Cpu
} from "lucide-react";
import { Button } from "../components/button.js";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Tech Icons (keep it minimal + professional)
  const techIcons = [
    { Icon: Code, x: "10%", y: "15%", delay: 0.2 },
    { Icon: Database, x: "85%", y: "20%", delay: 0.4 },
    { Icon: Server, x: "15%", y: "75%", delay: 0.6 },
    { Icon: Layers, x: "80%", y: "70%", delay: 0.8 },
    { Icon: Globe, x: "20%", y: "45%", delay: 1.0 },
    { Icon: Smartphone, x: "75%", y: "45%", delay: 1.2 },
    { Icon: GitBranch, x: "12%", y: "60%", delay: 1.4 },
    { Icon: Cloud, x: "88%", y: "35%", delay: 1.6 },
    { Icon: Cpu, x: "50%", y: "85%", delay: 1.8 }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-transparent text-center">

      {/* Animated Tech Icons */}
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
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 8,
              delay: delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16 text-foreground" />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          👋 Hi, I&apos;m <span className="text-primary">Bhaviin</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Software Developer | Backend & Mobile
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          Turning ideas into production-ready applications.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* About Me Button */}
          <Button
            size="lg"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </Button>

          {/* Contact Button */}
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>

          {/* Resume Button (assets folder se open hoga) */}
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("/assets/BHAVIN_PATHAK_CV.pdf", "_blank")}
          >
            Download CV
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import DeveloperAnimation from "./assests/Developer.json";

// ── Variants ─────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const lottieVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

const socialVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const socialItem = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "backOut" },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "console.log('Hello World!');";

  // Typing animation — starts after a short delay so page feels loaded
  useEffect(() => {
    const delay = setTimeout(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }, 600);
    return () => clearTimeout(delay);
  }, []);

  // Subtle parallax on the background blobs
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 400], [0, -40]);
  const blob2Y = useTransform(scrollY, [0, 400], [0, 40]);
  const lottieY = useTransform(scrollY, [0, 400], [0, 30]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-1"
    >
      {/* ── Background ───────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />

      {/* Decorative parallax blobs */}
      <motion.div
        aria-hidden
        style={{ y: blob1Y }}
        className="absolute top-16 -left-24 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl -z-10 pointer-events-none"
      />
      <motion.div
        aria-hidden
        style={{ y: blob2Y }}
        className="absolute bottom-16 -right-24 w-80 h-80 bg-indigo-100 rounded-full opacity-40 blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ── LEFT: Text content ───────────────────────────────── */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Typing line */}
          <motion.div variants={fadeUp} className="inline-block">
            <code className="text-black font-mono text-sm">
              {text}
              <span className="inline-block w-2 h-4 bg-black ml-1 animate-blink" />
            </code>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl font-bold text-gray-900"
          >
            Hello! I'm{" "}
            <motion.span
              className="text-blue-600 inline-block"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" }}
            >
              Vikas K
            </motion.span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-gray-600"
          >
            Full Stack Developer
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-600 max-w-xl"
          >
            Full Stack Engineer specializing in building robust, scalable web
            applications with modern technologies. Passionate about clean code,
            solving complex problems, and delivering impactful digital solutions.
          </motion.p>

          {/* Social icons */}
          <motion.div
            variants={socialVariants}
            className="flex justify-center lg:justify-start gap-4 pt-2"
          >
            {[
              { href: "https://github.com/vikask011", icon: <Github size={20} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/vikas-k-95o/", icon: <Linkedin size={20} />, label: "LinkedIn" },
              { href: "mailto:vikas95116@gmail.com", icon: <Mail size={20} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                variants={socialItem}
                whileHover={{
                  scale: 1.18,
                  backgroundColor: "rgb(37 99 235)",
                  color: "#fff",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.92 }}
                className="p-3 bg-gray-100 text-gray-700 rounded-full transition-colors"
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2"
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgb(29 78 216)",
                boxShadow: "0 8px 24px -4px rgba(59,130,246,0.45)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="inline-block"
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.a>

            <motion.a
              href="#contact"
              className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-medium"
              whileHover={{
                scale: 1.04,
                borderColor: "rgb(37 99 235)",
                color: "rgb(37 99 235)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Lottie ────────────────────────────────────── */}
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={lottieVariants}
          initial="hidden"
          animate="visible"
          style={{ y: lottieY }}
        >
          {/* Subtle floating loop */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Lottie
              animationData={DeveloperAnimation}
              loop
              autoplay
              className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[480px]"
            />
          </motion.div>
        </motion.div>

      </div>

      {/* Cursor blink */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}
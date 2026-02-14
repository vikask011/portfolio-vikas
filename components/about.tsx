"use client";

import { useRef } from "react";
import Lottie from "lottie-react";
import aboutAnimation from "./assests/about.json";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } },
};

const textContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const paraVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const infoCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "backOut", delay: i * 0.12 },
  }),
};

const lottieVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.93 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut", delay: 0.2 },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const lottieRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.6 });
  const cardInView    = useInView(cardRef,    { once: true, amount: 0.15 });
  const textInView    = useInView(textRef,    { once: true, amount: 0.2 });
  const lottieInView  = useInView(lottieRef,  { once: true, amount: 0.3 });

  // Parallax blobs
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const infoItems = [
    { label: "Profile",   value: "Full Stack Web Developer" },
    { label: "Location",  value: "Bengaluru, Karnataka, India" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('/images/pattern.png')`,
          backgroundSize: "400px 400px",
        }}
      />

      {/* Parallax blobs */}
      <motion.div
        aria-hidden
        style={{ y: blob1Y }}
        className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none"
      />
      <motion.div
        aria-hidden
        style={{ y: blob2Y }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Heading ───────────────────────────────────────────── */}
        <motion.div
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={headingInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* ── Main Card ─────────────────────────────────────────── */}
        <motion.div
          ref={cardRef}
          variants={cardVariants}
          initial="hidden"
          animate={cardInView ? "visible" : "hidden"}
          whileHover={{
            boxShadow: "0 20px 48px -8px rgba(59,130,246,0.12)",
            transition: { duration: 0.3 },
          }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* ── LEFT: Text ──────────────────────────────────────── */}
            <motion.div
              ref={textRef}
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
              variants={textContainerVariants}
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
            >
              <motion.p
                variants={paraVariants}
                className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-1 first-letter:float-left"
              >
                Full Stack Engineer with a strong foundation in designing and
                deploying production-grade web applications. Proficient in the
                MERN stack (MongoDB, Express, React, Node.js) with expertise in
                modern frontend technologies including Tailwind CSS, TypeScript,
                and responsive design patterns.
              </motion.p>

              <motion.p variants={paraVariants}>
                Currently gaining hands-on experience as a Full Stack Web
                Developer Intern at Blue Midas Consulting, contributing to
                scalable e-commerce solutions with SSO authentication,
                multilingual support, and secure payment integration.
              </motion.p>

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                {infoItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={infoCardVariants}
                    initial="hidden"
                    animate={textInView ? "visible" : "hidden"}
                    whileHover={{
                      backgroundColor: "rgb(239 246 255)",
                      borderLeftColor: "rgb(37 99 235)",
                      transition: { duration: 0.2 },
                    }}
                    className="group p-6 rounded-xl transition-colors border-l-4 border-transparent cursor-default"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <motion.span
                        className="w-2 h-2 bg-blue-600 rounded-full inline-block"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      {item.label}
                    </h3>
                    <p className="text-gray-600">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT: Lottie ────────────────────────────────────── */}
            <motion.div
              ref={lottieRef}
              variants={lottieVariants}
              initial="hidden"
              animate={lottieInView ? "visible" : "hidden"}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              >
                <Lottie
                  animationData={aboutAnimation}
                  loop
                  className="w-full max-w-md"
                />
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import php from "../assets/tech/php.png";
import mysql from "../assets/tech/mysql_original_wordmark_logo_icon_146417.png";

// URL des images de logos de technologies et logiciels
const techItems = [
  { title: "HTML", imageUrl: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { title: "CSS", imageUrl: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { title: "Bootstrap", imageUrl: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" },
  { title: "Tailwind", imageUrl: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
  { title: "JavaScript", imageUrl: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
  { title: "React.js", imageUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { title: "Vue.js", imageUrl: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
  { title: "Angular", imageUrl: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
  { title: "MongoDB", imageUrl: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { title: "Node.js", imageUrl: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { title: "PHP", imageUrl: php },
  { title: "Symfony", imageUrl: "https://cdn.worldvectorlogo.com/logos/symfony.svg" },
  { title: "Django", imageUrl: "https://cdn.worldvectorlogo.com/logos/django-community.svg" },
  { title: "Git", imageUrl: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  { title: "Flutter", imageUrl: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg" },
  { title: "MySQL", imageUrl: mysql },
];

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Compétences technologiques en Développement Web
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Compétences</h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
        {/* 1ère ligne (4 éléments) */}
        {techItems.slice(0, 4).map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center group"
          >
            <img
              src={tech.imageUrl}
              alt={`${tech.title} logo`}
              className="w-16 h-16 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
            />
            <span className="text-white mt-2 text-sm">{tech.title}</span>
          </motion.div>
        ))}

        {/* 2ème ligne (4 éléments) */}
        {techItems.slice(4, 8).map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
            className="flex flex-col items-center group"
          >
            <img
              src={tech.imageUrl}
              alt={`${tech.title} logo`}
              className="w-16 h-16 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
            />
            <span className="text-white mt-2 text-sm">{tech.title}</span>
          </motion.div>
        ))}

        {/* 3ème ligne (3 éléments) */}
        {techItems.slice(8, 11).map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.8 }}
            className="flex flex-col items-center group"
          >
            <img
              src={tech.imageUrl}
              alt={`${tech.title} logo`}
              className="w-14 h-14 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
            />
            <span className="text-white mt-2 text-sm">{tech.title}</span>
          </motion.div>
        ))}

        {/* 4ème ligne (3 éléments) */}
        {techItems.slice(11, 14).map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 1.2 }}
            className="flex flex-col items-center group"
          >
            <img
              src={tech.imageUrl}
              alt={`${tech.title} logo`}
              className="w-14 h-14 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
            />
            <span className="text-white mt-2 text-sm">{tech.title}</span>
          </motion.div>
        ))}

        {/* 5ème ligne (2 éléments) */}
        {techItems.slice(14, 16).map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 1.6 }}
            className="flex flex-col items-center group"
          >
            <img
              src={tech.imageUrl}
              alt={`${tech.title} logo`}
              className="w-16 h-16 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
            />
            <span className="text-white mt-2 text-sm">{tech.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "competence");

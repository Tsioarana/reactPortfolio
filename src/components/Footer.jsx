import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faSkype, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { logo } from "../assets";
import video from "../assets/video.mp4"

const Footer = () => {
  return (
    <footer className="relative h-auto overflow-hidden bg-black text-white">
      {/* Vidéo de fond */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video} // Remplacez par le lien de votre vidéo
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        {/* Logo et Description en centre */}
        <motion.img
          src={logo}
          alt="Logo"
          className="h-20 w-20 mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <p className="text-center mb-2">
          Tsiferaniaina Angelot, Développeur Web Freelance
        </p>
        <p className="text-center mb-4">
          Créatif et passionné par la technologie et le développement.
        </p>

        {/* Conteneur pour les colonnes */}
        <div className="flex justify-between w-full max-w-4xl px-4">
          {/* Colonne 1: Réseaux sociaux */}
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
              <motion.div whileHover={{ scale: 1.2 }}>
                <a href="https://www.facebook.com/tsioarana.nokasaina" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-3xl cursor-pointer" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <a href="https://mg.linkedin.com/in/rolland-razafimahatratra-10a61a274" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700 text-3xl cursor-pointer" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <a href="Tsiferaniaina Angelot" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSkype} className="text-blue-500 text-3xl cursor-pointer" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }}>
                <a href="https://github.com/Tsioarana" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-green-300 text-3xl cursor-pointer" />
                </a>
              </motion.div>
            </div>
            <motion.p className="flex items-center mb-1" whileHover={{ scale: 1.1 }}>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                angelottsiferana@gmail.com
              </motion.p>
          </div>

          {/* Colonne 2: Informations de contact */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <motion.p className="flex items-center mb-1" whileHover={{ scale: 1.1 }}>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +261 33 04 160 79
              </motion.p>

              <motion.p className="flex items-center" whileHover={{ scale: 1.1 }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Antananarivo Madagascar
              </motion.p>
            </div>
          </div>
        </div>


        {/* Mention de copyright */}
        <p className="text-sm mt-4">© 2024 by Angelot. 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;

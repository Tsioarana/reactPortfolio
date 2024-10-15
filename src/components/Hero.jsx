import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { zah } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>


  {/* Column 2: Title and Description on the right */}
  <div className="flex-1">
    <h1 className={`${styles.heroHeadText} text-white`} style={{ fontSize: '3rem' }}>
      Je suis <span className='text-[#3043b4]'>Angelot Développeur Web</span>
    </h1>
    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
      Je suis passionné d'informatique et je m'engage à perfectionner mes compétences en programmation tout en contribuant activement à l'avancement des nouvelles technologies.
    </p>
  </div>
  {/* Column 1: Image on the left */}
  <div className="flex-1">
    <img src={zah} alt="Développeur Web" className="w-full h-auto object-cover" />
  </div>
</div>

<br />
<br />
<br />
<br />
<br />
<br />
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

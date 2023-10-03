'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaverse World" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1.2)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> a dazzling frontier of the future, beckons with 
        an extraordinary realm where reality blurs seamlessly with imagination. Here, 
        you don't merely visit a virtual world you step into it and become one with its wonders.{' '}
        <span className="font-extrabold text-white">
          In the metaverse
        </span>{' '}
        , the line between what's real and what's fantastical dissolves{' '}
        <span className="font-extrabold text-white"></span> , and your senses awaken to every
         experience, every emotion.{' '}
        <span className="font-extrabold text-white"></span> Picture this with nothing more than a pair of VR 
        goggles, you embark on epic journeys through boundless metaverse landscapes
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1.5)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

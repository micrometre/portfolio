import { motion } from 'framer-motion'
import {
  fadeInUp,
  scaleIn,
  fadeIn,
  transitions,
  createDelayedAnimation,
  floatingAnimation,
  floatingAnimationReverse
} from '../utils/motion'
import { FileText } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      {/* Enterprise Grid Background */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Radial Spotlight */}
      <div className="absolute inset-0 bg-transparent bg-[radial-gradient(circle_800px_at_50%_40%,#1e1e2e00,transparent)]">
        {/* Subtle accent blob */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>

      {/* Vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_100%)]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={transitions.default}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-gray-200 bg-clip-text text-transparent tracking-tight"
            variants={scaleIn}
            initial="initial"
            animate="animate"
            transition={createDelayedAnimation(0.1).transition}
          >
            Hello, I am Henok
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={createDelayedAnimation(0.2).transition}
          >
            Full-Stack Developer currently based in London, United Kingdom.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={createDelayedAnimation(0.3).transition}
          >
            <a
              target="_blank" href="/resume.pdf"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] group"
            >
              View Resume
              <FileText className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

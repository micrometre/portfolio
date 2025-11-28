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

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={transitions.default}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            variants={scaleIn}
            initial="initial"
            animate="animate"
            transition={createDelayedAnimation(0.1).transition}
          >
            Hello, I am Henok
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
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
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Resume
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
        {...floatingAnimation}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
        {...floatingAnimationReverse}
      />
    </section>
  )
}

export default Hero

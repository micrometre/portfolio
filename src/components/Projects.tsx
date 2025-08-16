import { motion } from 'framer-motion'
import { 
  slideUp, 
  fadeInUp, 
  hoverLift, 
  hoverScale,
  staggerContainer,
  transitions,
  createDelayedAnimation,
  createViewportAnimation 
} from '../utils/motion'

const projects = [
  {
    title: 'Ansible Events',
    description: 'Cloud computing automation project using Ansible for event-driven infrastructure management.',
    image: '/assets/ansible-events-preview.jpg',
    link: '/work/ansible-events',
    tags: ['Ansible', 'Cloud Computing', 'Automation', 'DevOps']
  },
  {
    title: 'ANPR/ALPR Flask Application',
    description: 'Automatic Number Plate Recognition system built with Flask for real-time vehicle identification.',
    image: '/assets/anpr-flask-preview.jpg', 
    link: '/work/anpr-flask',
    tags: ['Python', 'Flask', 'Computer Vision', 'Machine Learning']
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          transition={transitions.slow}
          {...createViewportAnimation()}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          {...createViewportAnimation()}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={slideUp}
              {...hoverLift}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                  {index === 0 ? '⚡' : '🚗'}
                </div>
                {/* Placeholder for actual image */}
                <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-black/50 px-2 py-1 rounded">
                  Image placeholder
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={project.link}
                  {...hoverScale}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                >
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          transition={createDelayedAnimation(0.4).transition}
          {...createViewportAnimation()}
          className="text-center mt-12"
        >
          <a 
            href="/work"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

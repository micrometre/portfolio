import { motion } from 'framer-motion'
import { 
  slideUp, 
  fadeIn, 
  hoverLift, 
  staggerContainerSlow,
  transitions,
  createViewportAnimation,
} from '../utils/motion'

const skillCategories = [
  {
    title: 'Frontend',
    description: 'JavaScript & React ',
    icon: '🎨',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'Bootstrap',  'Framer Motion']
  },
  {
    title: 'Backend', 
    description: 'Golang, Node.js & Python',
    icon: '⚙️',
    skills: ['Golang', 'Node.js', 'Python', 'Flask', 'Express', 'REST APIs', 'Database Design']
  },
  {
    title: 'Cloud Platforms',
    description: 'AWS, GCP & Azure',
    icon: '☁️',
    skills: ['AWS', 'Google Cloud Platform', 'Microsoft Azure', 'Ansible', 'Docker', 'Kubernetes']
  },
  {
    title: 'Computer Vision',
    description: 'PyTorch, TensorFlow for ANPR/ALPR',
    icon: '👁️',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'ANPR/ALPR', 'Machine Learning', 'Deep Learning', 'Computer Vision']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800/50">
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
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainerSlow}
          initial="initial"
          whileInView="animate"
          {...createViewportAnimation()}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={slideUp}
              {...hoverLift}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{category.title}</h3>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={staggerContainerSlow}
                initial="initial"
                whileInView="animate"
                {...createViewportAnimation()}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    variants={fadeIn}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

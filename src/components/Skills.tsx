import { motion } from 'framer-motion'
import { 
  slideUp, 
  fadeIn, 
  hoverLift, 
  staggerContainerSlow,
  transitions,
  createViewportAnimation,
} from '../utils/motion'
import { Palette, Server, Cloud, Eye } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    description: 'JavaScript & React ',
    icon: <Palette className="w-10 h-10 text-blue-400" />,
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'Bootstrap',  'Framer Motion']
  },
  {
    title: 'Backend', 
    description: 'Golang, Node.js & Python',
    icon: <Server className="w-10 h-10 text-purple-400" />,
    skills: ['Golang', 'Node.js', 'Python', 'Flask', 'Express', 'REST APIs', 'Database Design']
  },
  {
    title: 'Cloud Platforms',
    description: 'AWS, GCP & Azure',
    icon: <Cloud className="w-10 h-10 text-sky-400" />,
    skills: ['AWS', 'Google Cloud Platform', 'Microsoft Azure', 'Ansible', 'Docker', 'Kubernetes']
  },
  {
    title: 'Computer Vision',
    description: 'PyTorch, TensorFlow for ANPR/ALPR',
    icon: <Eye className="w-10 h-10 text-teal-400" />,
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'ANPR/ALPR', 'Machine Learning', 'Deep Learning', 'Computer Vision']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
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
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 group"
            >
              <div className="mb-6 p-4 bg-gray-800 rounded-lg inline-block group-hover:bg-gray-700 transition-colors duration-300 ring-1 ring-white/5">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {category.description}
              </p>
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
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs font-medium border border-gray-600/50 hover:border-blue-500/30 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-200"
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

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    description: 'JavaScript, React & Next.js',
    icon: '🎨',
    skills: ['JavaScript', 'TypeScript', 'React', 'Astro', 'Tailwind CSS', 'Bootstrap',  'Next.js', 'Framer Motion']
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
    skills: ['AWS', 'Google Cloud Platform', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Ansible']
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{category.title}</h3>
              <p className="text-gray-400 mb-6">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

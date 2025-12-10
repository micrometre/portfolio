import { motion } from 'framer-motion'
import { 
  slideUp, 
  hoverLift, 
  staggerContainer,
  transitions,
  createViewportAnimation 
} from '../utils/motion'

const apps = [
  {
    name: 'Daily Cashier',
    description: 'Privacy-first sales and invoice management application for small businesses.',
    href: 'https://daily-cashier.vercel.app/',
    icon: '💰',
    tags: ['React', 'TypeScript', 'Vercel']
  },
  {
    name: 'Tax Calculator',
    description: 'UK tax calculations tool for income tax, national insurance, and take-home pay.',
    href: 'https://tax-wise.netlify.app/',
    icon: '🧮',
    tags: ['React', 'TypeScript', 'Netlify']
  },
  {
    name: 'Invoice Generator',
    description: 'Create professional invoices quickly and easily with customizable templates.',
    href: 'https://dwinvoice.vercel.app/',
    icon: '📄',
    tags: ['React', 'PDF Generation', 'Vercel']
  },
  {
    name: 'Browser LLM',
    description: 'Run AI language models directly in your browser with WebLLM technology.',
    href: 'https://frontend-llm-lac.vercel.app/',
    icon: '🤖',
    tags: ['WebLLM', 'AI', 'WebGPU']
  },
  {
    name: 'Transformers',
    description: 'A beginner-friendly demo showcasing Transformers.js - run machine learning models directly in your browser!',
    href: 'https://transfromers.vercel.app',
    icon: '🔄',
    tags: ['Transformers.js', 'ML', 'Browser']
  },
  {
    name: 'Browser RAG Quiz',
    description: 'RAG-powered quiz application running entirely in your browser.',
    href: 'https://browser-rag-quiz.vercel.app',
    icon: '🧠',
    tags: ['RAG', 'AI', 'Browser']
  },
  {
    name: 'Embeddings',
    description: 'An AI-powered quiz application that grades answers using semantic similarity, running 100% in your browser with Transformers.js.',
    href: 'https://embeddings-virid.vercel.app/',
    icon: '📊',
    tags: ['Transformers.js', 'AI', 'Browser']
  }
]

const Apps = () => {
  return (
    <section id="apps" className="py-20 bg-gray-800/50">
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
            Apps & Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Live applications and open-source projects I've built
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          {...createViewportAnimation()}
        >
          {apps.map((app) => (
            <motion.a
              key={app.name}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={slideUp}
              {...hoverLift}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50 block"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{app.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-200 flex items-center gap-2">
                    {app.name}
                    <svg 
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Apps

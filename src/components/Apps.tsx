import { motion } from 'framer-motion'
import {
  slideUp,
  hoverLift,
  staggerContainer,
  transitions,
  createViewportAnimation
} from '../utils/motion'
import {
  Receipt,
  Calculator,
  FileText,
  Bot,
  Zap,
  BrainCircuit,
  Share2,
  ExternalLink
} from 'lucide-react'

const apps = [
  {
    name: 'Daily Cashier',
    description: 'Privacy-first sales and invoice management application for small businesses.',
    href: 'https://daily-cashier.vercel.app/',
    icon: <Receipt className="w-6 h-6 text-green-400" />,
    tags: ['React', 'TypeScript', 'Vercel']
  },
  {
    name: 'Tax Calculator',
    description: 'UK tax calculations tool for income tax, national insurance, and take-home pay.',
    href: 'https://tax-wise.netlify.app/',
    icon: <Calculator className="w-6 h-6 text-blue-400" />,
    tags: ['React', 'TypeScript', 'Netlify']
  },
  {
    name: 'Invoice Generator',
    description: 'Create professional invoices quickly and easily with customizable templates.',
    href: 'https://dwinvoice.vercel.app/',
    icon: <FileText className="w-6 h-6 text-yellow-400" />,
    tags: ['React', 'PDF Generation', 'Vercel']
  },
  {
    name: 'Browser LLM',
    description: 'Run AI language models directly in your browser with WebLLM technology.',
    href: 'https://frontend-llm-lac.vercel.app/',
    icon: <Bot className="w-6 h-6 text-purple-400" />,
    tags: ['WebLLM', 'AI', 'WebGPU']
  },
  {
    name: 'Transformers',
    description: 'A beginner-friendly demo showcasing Transformers.js - run machine learning models directly in your browser!',
    href: 'https://transfromers.vercel.app',
    icon: <Zap className="w-6 h-6 text-orange-400" />,
    tags: ['Transformers.js', 'ML', 'Browser']
  },
  {
    name: 'Browser RAG Quiz',
    description: 'RAG-powered quiz application running entirely in your browser.',
    href: 'https://browser-rag-quiz.vercel.app',
    icon: <BrainCircuit className="w-6 h-6 text-pink-400" />,
    tags: ['RAG', 'AI', 'Browser']
  },
  {
    name: 'Embeddings',
    description: 'An AI-powered quiz application that grades answers using semantic similarity, running 100% in your browser.',
    href: 'https://embeddings-virid.vercel.app/',
    icon: <Share2 className="w-6 h-6 text-cyan-400" />,
    tags: ['Transformers.js', 'AI', 'Browser']
  }
]

const Apps = () => {
  return (
    <section id="apps" className="py-20 bg-gray-900">
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
              className="group bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 block hover:bg-gray-800/60"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300 ring-1 ring-white/5">
                  {app.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-200 flex items-center gap-2">
                    {app.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400" />
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {app.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs font-medium border border-gray-600/30"
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

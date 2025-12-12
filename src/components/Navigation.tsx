import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  navSlideDown, 
  fadeInDown, 
  hoverScale,
  mobileMenuVariants,
  transitions,
  createDelayedAnimation 
} from '../utils/motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Articles', href: '/articles' },
    { name: 'Contact', href: '/#contact' },
  ]

  const appItems = [
    { name: 'Daily Cashier', href: 'https://daily-cashier.vercel.app/', description: 'Sales & Invoice Management' },
    { name: 'Tax Calculator', href: 'https://tax-wise.netlify.app/', description: 'UK Tax Calculations' },
    { name: 'Invoice Generator', href: 'https://dwinvoice.vercel.app/', description: 'Create Professional Invoices' },
    { name: 'Browser LLM', href: 'https://frontend-llm-lac.vercel.app/', description: 'AI Chat in Your Browser' },
    { name: 'Transformers', href: 'https://transfromers.vercel.app/', description: 'Transformers Play Ground' },
    { name: 'Browser RAG Quiz', href: 'https://browser-rag-quiz.vercel.app', description: 'RAG Quiz Application' },
    { name: 'Embeddings', href: 'https://embeddings-virid.vercel.app/', description: 'AI Quiz with Semantic Grading' },
  ]

  return (
    <motion.nav
      variants={navSlideDown}
      initial="initial"
      animate="animate"
      transition={transitions.default}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            {...hoverScale}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Henok.dev
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={fadeInDown}
                initial="initial"
                animate="animate"
                transition={createDelayedAnimation(index * 0.1).transition}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            
            {/* Apps Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAppsDropdownOpen(true)}
              onMouseLeave={() => setIsAppsDropdownOpen(false)}
            >
              <motion.button
                variants={fadeInDown}
                initial="initial"
                animate="animate"
                transition={createDelayedAnimation(navItems.length * 0.1).transition}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group flex items-center gap-1"
              >
                Apps
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isAppsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
              
              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isAppsDropdownOpen ? 1 : 0, y: isAppsDropdownOpen ? 0 : -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`absolute top-full right-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-md rounded-xl border border-gray-700 shadow-xl overflow-hidden ${isAppsDropdownOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                <div className="p-2">
                  {appItems.map((app) => (
                    <a
                      key={app.name}
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group"
                    >
                      <span className="text-white font-medium group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        {app.name}
                        <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                      <span className="text-gray-400 text-sm">{app.description}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          variants={mobileMenuVariants}
          initial="initial"
          animate={isMobileMenuOpen ? "animate" : "initial"}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gray-900/98 backdrop-blur-lg"
        >
          <div className="py-4 space-y-4 border-t border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Apps Section */}
            <div className="pt-4 border-t border-gray-700">
              <span className="block text-gray-500 text-sm font-semibold mb-3">Apps</span>
              {appItems.map((app) => (
                <a
                  key={app.name}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-gray-300 hover:text-white font-medium transition-colors duration-200"
                >
                  <span>{app.name}</span>
                  <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation

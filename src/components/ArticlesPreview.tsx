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

interface Article {
  slug: string
  data: {
    title: string
    description: string
    pubDate: Date
    author: string
    tags?: string[]
    featured?: boolean
  }
}

interface ArticlesProps {
  articles: Article[]
}

const ArticlesPreview = ({ articles }: ArticlesProps) => {
  const featuredArticles = articles.filter(article => article.data.featured).slice(0, 2)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <section id="articles" className="py-20">
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
            Latest Articles
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical insights and deep dives into my projects and technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          {...createViewportAnimation()}
        >
          {featuredArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              variants={slideUp}
              {...hoverLift}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-500/30">
                    Featured
                  </span>
                  <time className="text-gray-500 text-sm">
                    {formatDate(article.data.pubDate)}
                  </time>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                  {article.data.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {article.data.description}
                </p>

                {/* Tags */}
                {article.data.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.data.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.data.tags.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{article.data.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Read More Link */}
                <motion.a
                  href={`/articles/${article.slug}`}
                  {...hoverScale}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200 group"
                >
                  Read Article
                  <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Articles Link */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          transition={createDelayedAnimation(0.4).transition}
          {...createViewportAnimation()}
          className="text-center mt-12"
        >
          <a 
            href="/articles"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ArticlesPreview

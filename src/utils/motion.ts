// Optimized Framer Motion variants and configurations
import type { Variants, Transition } from 'framer-motion'

// Common easing functions
export const easing = {
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeInOut: [0.645, 0.045, 0.355, 1],
  spring: { type: "spring", damping: 20, stiffness: 100 },
} as const

// Common transition configurations
export const transitions = {
  default: { duration: 0.4, ease: easing.easeOut },
  slow: { duration: 0.8, ease: easing.easeOut },
  spring: { type: "spring", damping: 20, stiffness: 100 },
  springSlow: { type: "spring", damping: 25, stiffness: 80 },
} as const

// Reusable animation variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
}

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
}

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
}

export const slideUp: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
}

export const slideDown: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
}

// Container variants for stagger animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggerContainerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Hover animations
export const hoverLift = {
  whileHover: { y: -10 },
  transition: transitions.spring,
}

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: transitions.spring,
}

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: transitions.default,
  },
}

// Background floating animations
export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    scale: [1, 1.1, 1],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
}

export const floatingAnimationReverse = {
  animate: {
    y: [0, 15, 0],
    scale: [1, 0.9, 1],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
}

// Navigation variants
export const navSlideDown: Variants = {
  initial: { y: -100 },
  animate: { y: 0 },
}

export const mobileMenuVariants: Variants = {
  initial: { height: 0 },
  animate: { height: 'auto' },
}

// Utility functions for common animation patterns
export const createStaggeredAnimation = (delay: number = 0.1) => ({
  transition: {
    staggerChildren: delay,
  },
})

export const createDelayedAnimation = (delay: number) => ({
  transition: { ...transitions.default, delay },
})

export const createViewportAnimation = (once: boolean = true) => ({
  viewport: { once },
})
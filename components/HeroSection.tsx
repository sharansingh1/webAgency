'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-primary-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Subtle Arc/Lighting Design */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] opacity-25 pointer-events-none">
          <svg viewBox="0 0 1200 800" className="w-full h-full">
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(2, 132, 199)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="rgb(14, 165, 233)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgb(2, 132, 199)" stopOpacity="0.2" />
              </linearGradient>
              
              {/* Lightning flash gradient - bright white center that moves */}
              <linearGradient id="lightningFlash" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgb(14, 165, 233)" stopOpacity="0" />
                <stop offset="40%" stopColor="rgb(14, 165, 233)" stopOpacity="0" />
                <stop offset="47%" stopColor="rgb(14, 165, 233)" stopOpacity="0.9" />
                <stop offset="50%" stopColor="rgb(255, 255, 255)" stopOpacity="1" />
                <stop offset="53%" stopColor="rgb(14, 165, 233)" stopOpacity="0.9" />
                <stop offset="60%" stopColor="rgb(14, 165, 233)" stopOpacity="0" />
                <stop offset="100%" stopColor="rgb(14, 165, 233)" stopOpacity="0" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  values="-600 0; 1800 0"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              <filter id="lightningGlow">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Base arc paths */}
            <path
              d="M 0 400 Q 300 200, 600 300 T 1200 400"
              stroke="url(#arcGradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              className="animate-pulse"
              style={{animationDuration: '4s'}}
            />
            <path
              d="M 0 450 Q 350 250, 650 350 T 1200 450"
              stroke="url(#arcGradient)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
              filter="url(#glow)"
              className="animate-pulse"
              style={{animationDuration: '5s', animationDelay: '1s'}}
            />
            
            {/* Lightning flash effect - main arc */}
            <path
              d="M 0 400 Q 300 200, 600 300 T 1200 400"
              stroke="url(#lightningFlash)"
              strokeWidth="7"
              fill="none"
              filter="url(#lightningGlow)"
              opacity="0.85"
            />
            
            {/* Lightning flash effect - secondary arc */}
            <path
              d="M 0 450 Q 350 250, 650 350 T 1200 450"
              stroke="url(#lightningFlash)"
              strokeWidth="6"
              fill="none"
              filter="url(#lightningGlow)"
              opacity="0.75"
            >
              <animate
                attributeName="opacity"
                values="0.75;0.85;0.75"
                dur="6s"
                begin="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <Sparkles size={16} className="mr-2" />
              Premium Web Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Custom High-Quality
              <span className="gradient-text block">Websites</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              We create stunning, modern websites that are proven to increase your reach and drive real business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn-primary inline-flex items-center group">
                Start Your Project
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-secondary inline-flex items-center group">
                <Zap size={20} className="mr-2" />
                View Our Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">3x</div>
                <div className="text-sm text-gray-600">Average Reach Increase</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="h-4 bg-primary-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-full shadow-lg animate-float">
                <Sparkles size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <Zap size={20} className="text-primary-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

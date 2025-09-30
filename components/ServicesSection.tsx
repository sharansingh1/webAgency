'use client'

import { motion } from 'framer-motion'
import { Code, Zap, CheckCircle, ArrowRight, Monitor, Smartphone, Globe, BarChart3 } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Code size={32} className="text-primary-600" />,
      title: "Custom Website Development",
      description: "We create stunning, modern websites tailored to your business needs. Every site is built with cutting-edge technology and optimized for performance.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Modern UI/UX",
        "Mobile-First Approach",
        "Cross-Browser Compatible"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap size={32} className="text-primary-600" />,
      title: "AI-Powered Ad Campaigns",
      description: "Our AI-driven marketing campaigns are proven to increase reach and engagement. We use advanced algorithms to optimize your ad performance.",
      features: [
        "AI Optimization",
        "Targeted Audiences",
        "Real-time Analytics",
        "A/B Testing",
        "ROI Tracking",
        "Multi-Platform Campaigns"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ]

  const technologies = [
    { icon: <Monitor size={24} />, name: "React & Next.js" },
    { icon: <Smartphone size={24} />, name: "Mobile Responsive" },
    { icon: <Globe size={24} />, name: "SEO Optimized" },
    { icon: <BarChart3 size={24} />, name: "Analytics Ready" }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-50 rounded-xl mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Built with Modern Technology</h3>
            <p className="text-gray-600">We use the latest tools and frameworks to deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white p-4 rounded-xl shadow-md mb-3 inline-block">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-8">Let's discuss your project and create something amazing together</p>
          <a href="#contact" className="btn-primary">
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

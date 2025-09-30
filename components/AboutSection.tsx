'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, Target, TrendingUp, Shield } from 'lucide-react'

export default function AboutSection() {
  const stats = [
    { icon: <Award size={24} />, number: "50+", label: "Projects Completed" },
    { icon: <Users size={24} />, number: "45+", label: "Happy Clients" },
    { icon: <Clock size={24} />, number: "2-4", label: "Weeks Delivery" },
    { icon: <TrendingUp size={24} />, number: "300%", label: "Avg. Reach Increase" }
  ]

  const values = [
    {
      icon: <Target size={32} className="text-primary-600" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that impact your business growth and success."
    },
    {
      icon: <Shield size={32} className="text-primary-600" />,
      title: "Quality Assured",
      description: "Every project undergoes rigorous testing and quality checks to ensure excellence."
    },
    {
      icon: <Users size={32} className="text-primary-600" />,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to understand your unique needs."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Sharaksh?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              We're passionate about creating exceptional digital experiences that drive real business results. 
              Our team combines technical expertise with creative vision to deliver websites and marketing campaigns 
              that not only look amazing but perform exceptionally.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              With years of experience in web development and AI-powered marketing, we understand what it takes 
              to create solutions that stand out in today's competitive digital landscape.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 bg-primary-50 rounded-lg flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-primary-600 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-primary-100 mb-6">
                  Join the growing number of businesses that trust us to deliver exceptional digital solutions.
                </p>
                <a href="#contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                  Get Started Today
                </a>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your goals and requirements" },
              { step: "02", title: "Design", description: "Create stunning designs that reflect your brand" },
              { step: "03", title: "Development", description: "Build with modern technology and best practices" },
              { step: "04", title: "Launch", description: "Deploy and optimize for maximum performance" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

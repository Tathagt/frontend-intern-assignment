'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frontend Intern Assignment
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Pixel-perfect implementation with React, TypeScript & Tailwind CSS
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              🎨 Design Implementation
            </h2>
            <p className="text-gray-600 mb-6">
              This is a placeholder. Replace this with your Figma design implementation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500 text-white p-6 rounded-lg cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">Feature 1</h3>
                <p>Interactive hover states</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-500 text-white p-6 rounded-lg cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">Feature 2</h3>
                <p>Smooth animations</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-purple-500 text-white p-6 rounded-lg cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2">Feature 3</h3>
                <p>Accessible design</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
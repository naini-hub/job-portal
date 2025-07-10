import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My App 🚀</h1>
        <p className="text-gray-600 mb-6">
          This is a Vite + React + TailwindCSS setup. Let's build something amazing.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App

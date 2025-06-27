import React from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat text-white scroll-smooth" style={{ backgroundImage: 'url(/galaxy-bg.jpg)', backdropFilter: 'blur(8px)' }}>
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur p-4 flex justify-center space-x-8 text-teal-300 shadow-md">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/writing">Writing</Link>
      </nav>

      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center drop-shadow-[0_0_10px_teal]">
          Code Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sample Blog Card */}
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-300 mb-2">Project Name</h2>
            <p className="text-gray-300 mb-4">Short description of the project. What it does, why it’s cool, tech stack.</p>
            <a href="#" className="text-orange-400 hover:underline">View Project →</a>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-300 mb-2">Another App</h2>
            <p className="text-gray-300 mb-4">Creative dashboard? Full stack thingy? Add anything you’re proud of here.</p>
            <a href="#" className="text-orange-400 hover:underline">Check it out →</a>
          </div>
        </div>

        <footer className="mt-16 text-sm text-center text-gray-500">
          Built with keyboard wizardry — © FaeCoder
        </footer>
      </div>
    </div>
  );
}

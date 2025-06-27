import React from 'react';

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-teal-900 text-white p-8 scroll-smooth">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center drop-shadow-[0_0_10px_teal]">
          Memoir: Lessons Learned
        </h1>

        <article className="space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed">
          <p>The first funeral I ever attended was when I was four years old. The idea of death was foreign to me, as it should be to four-year-olds...</p>
          <p>If there was ever a time in my life I could say that sort of child-like innocence began to leave me, it was the November I was ten...</p>
          <p>When I was eleven, I went on my first trip without my parents. The cape I dawned still hung on my shoulders...</p>
          <p>Just a little over two months later, the remaining veil of innocence I had been living under dissolved completely...</p>
          <p>That was the last time I saw him alive. I cried at the open-house, a waxy figure that resembled my grandpa lying in a casket...</p>
          <p>For the first time in my young life I grasped the concept of death and it shook me harder than I would have thought possible...</p>
        </article>

        <footer className="mt-16 text-sm text-center text-gray-500">
          Written with heart — © FaeCoder
        </footer>
      </div>
    </div>
  );
}

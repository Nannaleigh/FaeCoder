
import "./styles.css";   

export default function FaeCoderLanding() {
  const [clickCount, setClickCount] = useState(0);
  const [eggHatched, setEggHatched] = useState(false);

  const handleEasterEggClick = () => {
    if (clickCount >= 2) {
      setEggHatched(true);
    } else {
      setClickCount(clickCount + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-teal-900 text-white flex flex-col items-center justify-start pt-20 p-8 scroll-smooth">
      <img src="./assets/logo.svg" alt="FaeCoder Logo" className="w-48 h-48 object-contain mb-4 animate-float drop-shadow-[0_0_10px_teal]" />
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center text-white drop-shadow-[0_0_10px_teal]">
        Welcome to <span className="text-teal-400">FaeCoder</span> 🌠
      </h1>
      <p className="max-w-3xl text-center text-lg md:text-xl text-gray-300 mb-10">
        You’ve just landed on the digital doorstep of FaeCoder — a galaxy-powered blend of logic, creativity, and a little bit of fairy dust.
        I’m the mind behind the magic — a data-driven, dragon-hearted, caffeinated code-slinger with a penchant for SQL sorcery, dashboard aesthetics,
        and turning chaos into clarity. FaeCoder is where function meets fantasy, where pixels have purpose, and where I turn client ideas into clean,
        elegant results — all with a twinkle in my eye and a color palette that sings like a solar flare.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl z-10">
        <a href="#portfolio" className="bg-purple-700 hover:bg-purple-600 rounded-2xl p-6 shadow-xl text-center transition duration-300">
          💼 Portfolio
        </a>
        <a href="#blog" className="bg-teal-700 hover:bg-teal-600 rounded-2xl p-6 shadow-xl text-center transition duration-300">
          📖 Blog
        </a>
        <a href="#contact" className="bg-orange-700 hover:bg-orange-600 rounded-2xl p-6 shadow-xl text-center transition duration-300">
          📬 Contact
        </a>
      </div>

      <footer className="mt-16 text-sm text-gray-500 relative">
        Built with love, sparks, and just a hint of stardust ✨ — FaeCoder
        <br></br>
        <button onClick={handleEasterEggClick} className="absolute bottom-0 right-0 p-2 hover:scale-110 transition-transform">
          {!eggHatched ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-8 text-teal-400 transition-transform ${clickCount > 0 ? 'animate-shake' : ''}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C10 5 7 5 7 9c0 4 3 6 5 9 2-3 5-5 5-9 0-4-3-4-5-7z" />
            </svg>
          ) : (
            <div className="animate-flap text-teal-400 text-lg">
              <img src="">cxccx</img>
            </div>
          )}
        </button>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate y(0px); }
          50% { transform: translate y(-10px); }
          100% { transform: translate y(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade {
          0% {opacity: 0.4;}
          50% {opacity: 0.8;}
          100% {opacity: 0.4;}
        }
        .animate-fade {
          animation: fade 20s linear infinite;
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(5deg); }
          50% { transform: rotate(-5deg); }
          75% { transform: rotate(3deg); }
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }
        @keyframes flap {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-flap {
          animation: flap 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}

import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/portfolio/images/banner.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 ">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Krishnaveni Mandula
          </h1>
          <br />
          <p className="text-xl text-muted-foreground mb-8">
            A passionate Full Stack Web Developer based in the UK. I craft
            modern, responsive, and user-friendly websites and applications.
          </p>
          <div className="font-medium">
            <a
              href="/portfolio/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-mint-green hover:bg-mint-green/40 text-black font-semibold py-2 px-4 rounded-2xl shadow transition-all cursor-pointer">
                View Resume <FaDownload />
              </button>
            </a>
          </div>
        </div>

        <div className="ml-20 w-full max-w-md aspect-square rounded-xl border-2 border-mint-green/40 text-gray-300 p-6 overflow-hidden shadow-mint-glow">
          {/* Animated Border Line
          <span className="absolute inset-0 z-0 border-line-animation"></span> */}

          {/* Content */}
          <div className="z-10">
            <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                Full Stack Developer with 2+ years of hands-on experience.
              </li>
              <li>
                MERN Stack Developer (React, Node.js, MongoDB, Express.js)
              </li>
              <li>Builds scalable full-stack web applications</li>
              <li>Strong in REST APIs and front-end integration</li>
              <li>Focus on responsive UI & performance</li>
              <li>Continuous learner, loves real-world projects</li>
              <li>Based in the UK, open to opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

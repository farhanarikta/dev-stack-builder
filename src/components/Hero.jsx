import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Hero Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Build Your
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                {" "}Developer Stack
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Explore modern technologies, choose the tools you need, and
              build your perfect developer stack for your next project.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
             <button className="px-6 py-3 rounded-full text-white font-semibold gradient-theme hover:opacity-90 transition">
               Explore Technologies
            </button>

              <button className="px-6 py-3 rounded-full font-semibold text-gray-700 border border-gray-300 hover:border-gray-500 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Dev Stack technologies"
              className="w-full max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

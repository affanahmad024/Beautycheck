const FaceRatingComponent = () => {
  return (
    <>
      <section
        id="face-rating"
        className="relative bg-gradient-to-br from-gray-950 to-gray-800 min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-16 px-4 md:px-8"
      >
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center opacity-10"
          style={{backgroundImage: "url('https://source.unsplash.com/random/1600x900/?abstract,tech')"}}
        ></div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 space-y-12 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 text-center md:text-left animate-slideInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Discover Your Face Rating with{" "}
              <span className="text-purple-400">PrettyScale AI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Find yourself, know what suits you and look better. Generate your
              Face rating and Skin Report by PrettyScale AI.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out group flex items-center justify-center mx-auto md:mx-0">
              Get Your Face Rating Report
              <svg
                className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center animate-slideInRight delay-200">
            <div className="relative bg-gray-800 border-4 border-gray-700 rounded-3xl p-4 shadow-2xl overflow-hidden w-full max-w-md animate-pulseBorder">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dLbiuZrDmKhikRWqkbH6fQHaJ3%26r%3D0%26pid%3DApi&f=1&ipt=d9b83a5ff5a79bcdcf39a6aa92c63c3a7c734e82059de4d649111913898b01a2&ipo=images"
                alt="PrettyScale AI Result"
                className="w-full h-auto rounded-2xl object-cover transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-8 right-8 bg-purple-600 text-white rounded-xl p-4 text-center shadow-lg transform rotate-3 hover:rotate-0 hover:scale-110 transition-transform duration-300 animate-bounceIn">
                <p className="text-3xl font-extrabold mb-1">99</p>
                <p className="text-sm">Test results</p>
                <div className="mt-2 text-xs opacity-80">
                  <p>You look confident</p>
                  <div className="w-24 h-1 bg-white bg-opacity-30 rounded-full mx-auto mt-1">
                    <div className="w-5/6 h-full bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaceRatingComponent;

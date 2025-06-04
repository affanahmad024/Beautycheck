
const HowItWorks = () => {
  return (
    <>
      <section
        id="how-it-works"
        className="py-20 bg-gray-900 text-center px-4 md:px-8"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-12 animate-fadeIn">
            How PrettyScale AI Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl border-t-4 border-purple-600 transform hover:scale-105 transition-transform duration-300 animate-fadeIn delay-100">
              <div className="flex items-center justify-center mb-6 text-purple-400">
                <span className="text-5xl font-bold mr-4">1</span>
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Add a Photo
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Choose a well-lit front-facing photo in natural light, head-up
                lens, ears and forehead visible, including the neck.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl border-t-4 border-purple-600 transform hover:scale-105 transition-transform duration-300 animate-fadeIn delay-300">
              <div className="flex items-center justify-center mb-6 text-purple-400">
                <span className="text-5xl font-bold mr-4">2</span>
                <svg
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-5h2v5h2v-5h2v5h2m-6 0h4m-4 0v-5m-4 5h4m-4 0v-5m-4 5h4m-4 0v-5m-4 5h4m-4 0v-5M12 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Get Analysis
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Wait a few seconds. Unleash the Power of Analysis. Experience
                the cutting-edge technology of PrettyScale face analyzer. Our
                advanced algorithms will examine your face structure, bone
                composition, and skin characteristics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;

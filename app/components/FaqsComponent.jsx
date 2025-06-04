import { useState } from "react";

const FaqsComponent = ({question,answer}) => {
    const [isActive, setIsActive] = useState(false);
    
      const toggleFaq = () => {
        setIsActive(!isActive);
      };
  return (
    <>
        <div className="bg-gray-800 rounded-lg shadow-xl animate-fadeIn delay-100 overflow-hidden">
            <button
              className="w-full text-left py-4 px-6 flex items-center justify-between text-white font-semibold text-lg hover:bg-gray-700 transition duration-300"
              onClick={toggleFaq}
            >
              {question}
              <svg
                className="w-6 h-6 transform transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={
                isActive
                  ? "p-6 pt-0 text-gray-300 transition-all duration-300 ease-in-out"
                  : "p-6 pt-0 text-gray-300 hidden transition-all duration-300 ease-in-out"
              }
            >
              <p>
                {answer}
              </p>
            </div>
          </div>
    </>
  )
}

export default FaqsComponent
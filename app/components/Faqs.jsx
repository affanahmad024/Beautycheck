
import FaqsComponent from "./FaqsComponent";

const Faqs = () => {
    const questions = [
        "What is face rating or attractiveness test?",
        "What is the most accurate face rating test?",
        "What is PrettyScale AI?",
        "How can I get started with Face rater or attractiveness test?",
        "What kind of report will I get with PrettyScale?",
        "How fast can this face rater provide report to me"
    ]
    const answers = [
        "Face rating or attractiveness test uses AI technology to comprehensively evaluate your appearance by analyzing facialshape, facial feature proportions, skin texture and quality to provide an objective beauty score.",
        "While beauty standards vary between individuals and cultures, facial rating combines both subjective and objective elements.PrettyScale analyzes hundreds of thousands of faces to provide an objective attractiveness score based on facial proportions, features, skin texture, and multiple other dimensions.",
        "PrettyScale is an AI-powered face analysis tool that provides an objective face rating and facial analysis report. With PrettyScale, you can understand your facial features and attractiveness score objectively.",
        "PrettyScale is easy to use. You can upload a photo and receive your face rating and analysis report in minutes. Report includes face rating, skin analysis, and beauty score. You can also save your analysis history for future reference.",
        "The report provides a comprehensive report including face rating, skin analysis, attractiveness score. The report helps you understand your face features objectively, and provides personalized suggestions for improvement.",
        "PrettyScale is designed for speed. Typically, you will receive your personalized face rating and analysis report within a few seconds after uploading your photo.",

    ]

  return (
    <section id="faqs" className="py-20 bg-gray-950 px-4 md:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12 animate-fadeIn">
          FAQs
        </h2>

        <div className="space-y-4">
            <FaqsComponent question={questions[0]} answer={answers[0]}/>
            <FaqsComponent question={questions[1]} answer={answers[1]}/>
            <FaqsComponent question={questions[2]} answer={answers[2]}/>
            <FaqsComponent question={questions[3]} answer={answers[3]}/>
            <FaqsComponent question={questions[4]} answer={answers[4]}/>
            <FaqsComponent question={questions[5]} answer={answers[5]}/>
        </div>
        <div className="text-center mt-16 animate-fadeIn delay-700">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out group flex items-center justify-center mx-auto">
            Get your face rating
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
      </div>
    </section>
  );
};

export default Faqs;

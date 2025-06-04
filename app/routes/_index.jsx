import FaceRatingComponent from "../components/FaceRatingComponent";
import Faqs from "../components/Faqs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

export const meta = () => {
  return [
    { title: "Objectify" },
    { name: "face rating app", content: "rate your self" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <FaceRatingComponent />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Faqs />
      </main>

      <Footer />
      <style>
        {`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); opacity: 1; }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); }
        }
        @keyframes pulseBorder {
            0% { border-color: #4a4a4a; }
            50% { border-color: #6b46c1; }
            100% { border-color: #4a4a4a; }
        }

        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-bounceIn { animation: bounceIn 0.8s ease-out forwards; }
        .animate-pulseBorder { animation: pulseBorder 2s infinite alternate; }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }`}
      </style>
    </>
  );
}

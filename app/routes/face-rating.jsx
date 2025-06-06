import Faqs from "../components/Faqs";
import process from "node:process";
import { Form } from "@remix-run/react";

export const action = async ({ request }) => {
  const fd = await request.formData();
  const file = fd.get("file");

  if (!file || typeof file === "string" || file.size === 0) {
    console.log("No file selected or file is empty.");
    // Handle cases where no file is selected or an empty file is submitted
    return null; // Or return an error response
  }
  console.log("file is....", file);

  const formData1 = new FormData();
  formData1.append("api_key", process.env.api_key);
  formData1.append("api_secret", process.env.api_secret);
  formData1.append("image_file", file);
  //   formData1.append("image_base64", )
  //   formData1.append("image_url", );

  const options = {
    method: "POST",
    body: formData1,
  };
  if (request.method == "POST") {
    const URL1 = "https://api-us.faceplusplus.com/facepp/v3/detect";
    const URL2 = "https://api-us.faceplusplus.com/facepp/v3/face/analyze";

    try {
      const response1 = await fetch(URL1, options);
      const result1 = await response1.json();
      console.log(result1);
      const face_token = result1.faces[0].face_token;

      const formData = new FormData();
      formData.append("api_key", process.env.api_key);
      formData.append("api_secret", process.env.api_secret);
      formData.append("face_tokens", face_token);
      formData.append(
        "return_attributes",
        "gender,age,smiling,headpose,facequality,blur,emotion,beauty,mouthstatus,eyegaze,skinstatus,eyestatus"
      );
      //   formData.append("return_attributes", "age");
      const options2 = {
        method: "POST",
        body: formData,
      };
      const response2 = await fetch(URL2, options2);
      const result2 = await response2.json();
      console.log("2nd output", result2);
      const user = result2.faces[0].attributes;
      console.log("user gender is ", user.gender.value);
      console.log("user age is ", user.age.value);
    //   console.log("user ", user);
      user.face_rectangle = result2.faces[0].face_rectangle
      console.log("user ", user);
    } catch (error) {
      console.log("error fetching", error);
    }
  }
  return null;
};

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
        {/* Main card container */}
        <div className="bg-gray-800 text-white rounded-xl shadow-2xl p-8 max-w-lg w-full transform transition-all duration-500 hover:scale-105">
          {/* Card title */}
          <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-fade-in-down">
            Get Your Face Rating
          </h1>

          {/* Inner content card */}

          <Form method="post" encType="multipart/form-data">
            <input type="file" id="file" name="file" />
            <button type="submit">request sending</button>
          </Form>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center animate-fade-in-up">
            {/* Section title */}
            <h2 className="text-xl font-semibold mb-4 text-gray-300">
              Pick a photo for Scan
            </h2>

            {/* Camera icon placeholder */}
            <div className="flex justify-center items-center h-24 w-24 bg-gray-700 rounded-full mx-auto mb-6 transition-transform duration-300 hover:rotate-6 hover:scale-110">
              {/* Using an SVG for the camera icon for better scalability and customization */}
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.82-1.2A2 2 0 0110.121 3h3.757a2 2 0 011.664.89l.82 1.2A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>

            {/* Instructions */}
            <div className="text-left text-gray-400 space-y-3 mb-6">
              <p className="flex items-center">
                <span className="text-green-400 mr-2">✓</span> Step 1: Open the
                original camera to face the natural light
              </p>
              <p className="flex items-center">
                <span className="text-green-400 mr-2">✓</span> Step 2: Keep an
                arm&apos;s distance, Take a photo
              </p>
            </div>

            {/* Attention section */}
            <div className="bg-red-900 bg-opacity-30 border border-red-700 rounded-lg p-4 mb-6 animate-pulse-once">
              <p className="font-bold text-red-400 mb-2">Attention</p>
              <ul className="text-left text-red-300 space-y-2">
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">✕</span> Don&apos;t make
                  any expressions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Show forehead
                  and ears
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Head-up lens
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Include the
                  neck
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tailwind CSS keyframes for animations */}
        <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-once {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 0, 0, 0.4);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 0, 0, 0.4);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          animation-delay: 0.3s; /* Delay to make it appear after the title */
        }

        .animate-pulse-once {
          animation: pulse-once 2s ease-in-out 1; /* Run once */
        }
      `}</style>
      </div>
      <Faqs />
    </>
  );
}

export default App;

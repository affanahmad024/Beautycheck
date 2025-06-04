

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 px-4 md:px-8 text-gray-400 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
            <div className="flex flex-col space-y-2">
                <a href="/" className="hover:text-purple-400 transition duration-300">PrettyScale AI</a>
                <a href="/" className="hover:text-purple-400 transition duration-300">About Us</a>
                <a href="/" className="hover:text-purple-400 transition duration-300">Contact Us</a>
            </div>
            <div className="flex flex-col space-y-2">
                <a href="/" className="hover:text-purple-400 transition duration-300">Privacy Policy</a>
                <a href="/" className="hover:text-purple-400 transition duration-300">Terms & Conditions</a>
                <a href="/" className="hover:text-purple-400 transition duration-300">Refund Policy</a>
            </div>
            <div className="flex flex-col space-y-2">
                <p>Support:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><a href="/" className="hover:text-purple-400 transition duration-300">PDF to Brainrot</a></li>
                    <li><a href="/" className="hover:text-purple-400 transition duration-300">Face Rating Analysis</a></li>
                    <li><a href="/" className="hover:text-purple-400 transition duration-300">Ghibli Image Generator</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center mt-10 text-gray-500">
            &copy; 2024 PrettyScale.AI. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer
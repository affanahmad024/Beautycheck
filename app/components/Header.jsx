
const Header = () => {
  return (
    <header className="bg-gray-800 shadow-lg py-4 px-6 fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-slideInLeft">
                <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M.636 12l.707.707M12 21v-1m-4.673-4.673l-.707.707M3 12l-.707-.707m18.106-.016L18.106 18.106m-12.728-12.728L12 1.636m0 16.728L6.364 12m11.314 0L18.106 5.894"></path></svg>
                <a href="/" className="text-xl font-bold text-gray-50 hover:text-purple-400 transition duration-300">PrettyScale AI</a>
            </div>
            <div className="flex items-center space-x-6">
                <a href="#face-rating" className="text-gray-300 hover:text-purple-400 transition duration-300 animate-fadeIn delay-100">Face Rating</a>
                <a href="#how-it-works" className="text-gray-300 hover:text-purple-400 transition duration-300 animate-fadeIn delay-200">How it Works</a>
                <a href="#features" className="text-gray-300 hover:text-purple-400 transition duration-300 animate-fadeIn delay-300">Features</a>
                <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition duration-300 animate-fadeIn delay-400">Testimonials</a>
                <a href="#faqs" className="text-gray-300 hover:text-purple-400 transition duration-300 animate-fadeIn delay-500">FAQs</a>
            </div>
        </nav>
    </header>
  )
}

export default Header
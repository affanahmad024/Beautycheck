
const Testimonials = () => {
  return (
    <>
        <section id="testimonials" className="py-20 bg-gray-900 px-4 md:px-8">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-white text-center mb-12 animate-fadeIn">What People Are Saying About PrettyScale AI</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 rounded-lg p-6 shadow-xl border-l-4 border-purple-500 animate-fadeIn delay-100 transform hover:translate-y-[-5px] transition-transform duration-300">
                        <p className="text-gray-300 text-lg italic mb-4">
                            &quot;PrettyScale AI gave me an objective perspective on my appearance, free from bias. My feelings about my looks have become much more positive since using it.&quot;
                        </p>
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/random/50x50/?person-face,female,smiling" alt="Emily Johnson" className="w-12 h-12 rounded-full mr-4 object-cover"/>
                            <div>
                                <p className="font-bold text-white">Emily Johnson</p>
                                <p className="text-sm text-gray-400">@emilyj</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 shadow-xl border-l-4 border-purple-500 animate-fadeIn delay-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                        <p className="text-gray-300 text-lg italic mb-4">
                            &quot;I was surprised by how detailed the analysis was - it&apos;s not just a simple face rating tool. The guidance on enhancing facial aesthetics is invaluable.&quot;
                        </p>
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/random/50x50/?person-face,male,happy" alt="Sarah Williams" className="w-12 h-12 rounded-full mr-4 object-cover"/>
                            <div>
                                <p className="font-bold text-white">Sarah Williams</p>
                                <p className="text-sm text-gray-400">@sarahw</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 shadow-xl border-l-4 border-purple-500 animate-fadeIn delay-300 transform hover:translate-y-[-5px] transition-transform duration-300">
                        <p className="text-gray-300 text-lg italic mb-4">
                            &quot;The site helps me understand which facial features enhance my beauty and which ones could be improved. It&apos;s exactly what I was looking for.&quot;
                        </p>
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/random/50x50/?person-face,female,confident" alt="Caitlin Walsh" className="w-12 h-12 rounded-full mr-4 object-cover"/>
                            <div>
                                <p className="font-bold text-white">Caitlin Walsh</p>
                                <p className="text-sm text-gray-400">@caitlinw</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 shadow-xl border-l-4 border-purple-500 animate-fadeIn delay-400 transform hover:translate-y-[-5px] transition-transform duration-300">
                        <p className="text-gray-300 text-lg italic mb-4">
                            &quot;PrettyScale has really boosted my self-esteem by showing me my facial features and how to embrace them. The face shape analysis was particularly helpful.&quot;
                        </p>
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/random/50x50/?person-face,male,young" alt="Sarah Hudson" className="w-12 h-12 rounded-full mr-4 object-cover"/>
                            <div>
                                <p className="font-bold text-white">Sarah Hudson</p>
                                <p className="text-sm text-gray-400">@sarahh</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 shadow-xl border-l-4 border-purple-500 animate-fadeIn delay-500 transform hover:translate-y-[-5px] transition-transform duration-300">
                        <p className="text-gray-300 text-lg italic mb-4">
                            &quot;What sets PrettyScale apart is its facial analysis feature. The precision and accuracy are unmatched compared to other beauty analysis sites!&quot;
                        </p>
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/random/50x50/?person-face,female,professional" alt="Alexandria Clark" className="w-12 h-12 rounded-full mr-4 object-cover"/>
                            <div>
                                <p className="font-bold text-white">Alexandria Clark</p>
                                <p className="text-sm text-gray-400">@alexic</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-6 shadow-xl border-l-4 border-purple-500 animate-fadeIn delay-600 transform hover:translate-y-[-5px] transition-transform duration-300">
                        <p className="text-gray-300 text-lg italic mb-4">
                            &quot;After trying many photo analysis services, PrettyScale delivered the easiest and highest quality facial analysis results. Truly impressive!&quot;
                        </p>
                        <div className="flex items-center">
                            <img src="https://source.unsplash.com/random/50x50/?person-face,male,student" alt="Kaley Smith" className="w-12 h-12 rounded-full mr-4 object-cover" />
                            <div>
                                <p className="font-bold text-white">Kaley Smith</p>
                                <p className="text-sm text-gray-400">@kaleys</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials
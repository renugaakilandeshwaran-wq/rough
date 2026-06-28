import { useState } from "react";
import heroImage from "../assets/hero.png";




export default function Hero() {

    const [showModel, setShowModel] = useState(false)

    return (
        <section className="bg-[#161E2E] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Side */}
                    <div className="lg:w-1/2 text-white">
                        <h3 className="text-green-500 font-semibold">
                            Award winning company
                        </h3>

                        <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Digital marketing agency and design. We grow your business online
                        </h1>

                        <p className="mt-6 text-sm text-gray-300 max-w-lg leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet felis egestas aug
                        </p>



                        <button
                            onClick={() => setShowModel(true)}
                            className="bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600"
                        >
                            Start a project
                        </button>

                        {showModel && (
                            <div className="fixed inset-0 z-50 bg-[#DFF8EE]/80 backdrop-blur-sm flex items-center justify-center px-4">

                                {/* Modal */}
                                <div className="relative bg-white rounded-2xl w-full max-w-4xl p-8 md:p-12 shadow-2xl">
                                    {/* Decorative Images */}
                                    {/* <img
                                    src={shape1}
                                    alt="shape1"
                                    className="absolute bottom-0 right-0 w-48 opacity-20 pointer-events-none"
                                /> */}

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setShowModel(false)}
                                        className="absolute -top-6 -right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-2xl text-gray-700 z-50"
                                    >
                                        ✕
                                    </button>
                                    <h2 className="text-5xl font-bold text-gray-900">
                                        Get Your Free Website Checkup
                                    </h2>

                                    <p className="mt-5 text-xl text-gray-600 max-w-2xl">
                                        Discover main benefits and issues of your website and how to fix them.
                                    </p>

                                    <form className="mt-10">

                                        <div className="grid md:grid-cols-2 gap-6">

                                            <input
                                                type="text"
                                                placeholder="Full Name*"
                                                className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500" />

                                            <input
                                                type="email"
                                                placeholder="Email Address*"
                                                className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500" />

                                            <input
                                                type="text"
                                                placeholder="Phone Number"
                                                className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500" />

                                            <input
                                                type="text"
                                                placeholder="Website Url"
                                                className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500" />

                                        </div>

                                        <textarea
                                            rows="6"
                                            placeholder="Message..."
                                            className="mt-6 w-full border rounded-xl p-4 text-black outline-none focus:border-green-500"
                                        ></textarea>

                                        <button
                                            className="mt-8 bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600"
                                        >
                                            Get My Free Checkup
                                        </button>

                                    </form>

                                </div>

                            </div>
                        )}












                    </div>

                    {/* Right Side */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src={heroImage}
                            alt="Hero"
                            className="w-full max-w-md lg:max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}


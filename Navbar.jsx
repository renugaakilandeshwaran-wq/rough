import React, { useState } from "react";
import designIcon from "../assets/design.png";

import digitalIcon from "../assets/digital.png";
import seoIcon from "../assets/seo.png";
import socialIcon from "../assets/social.png";
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const services = [
        {

            title: "Design",
            desc: "Create & develop your brand",
            icon: designIcon,
        },
        {
            title: "Digital Advertising",
            desc: "We grow your online visibility",
            icon: digitalIcon,

        },
        {
            title: "SEO",
            desc: "We grow your website position",
            icon: seoIcon,

        },
        {
            title: "Social Media",
            desc: "We manage your social media",
            icon: socialIcon,

        },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-[#161E2E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-white">
                {/* <div className="relative inline-flex items-center">
                    <div className="bg-green-500 px-4 py-2 rounded-r-md">
                        <span className="text-white font-bold text-lg">LOG</span>
                    </div>

                    <span className="text-white font-bold text-lg ml-1">
                        O
                    </span>
                </div> */}


                <div className="flex items-center">
                    <div className="bg-green-500 h-9 px- flex items-center pl-7 rounded-sm">
                        <span className="text-white font-bold text-lg leading-none">
                            LOG
                        </span>
                    </div>

                    <span className="text-white font-bold text-lg leading-none -ml-[2px]">
                        O
                    </span>
                </div>


                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8 font-medium">

                    <li className="cursor-pointer hover:text-green-500 transition">
                        Who we are
                    </li>
                    <li className="relative cursor-pointer">
                        <div
                            className="flex items-center gap-2 text-white cursor-pointer"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            What we do
                            <span>{showMenu ? "▲" : "▼"}</span>
                        </div>

                        {showMenu && (
                            <div className="absolute top-12 left-[-120px] w-[400px] bg-white rounded-2xl shadow-2xl p-5">

                                <div className="space-y-3">
                                    {services.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:bg-green-100 hover:border-green-400 cursor-pointer transition-all duration-300"                                    >
                                            <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
                                                <img
                                                    src={item.icon}
                                                    alt={item.title}
                                                    className="w-5 h-5 object-contain"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between w-full">
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-sm text-gray-500">
                                                        {item.desc}
                                                    </p>
                                                </div>

                                                <span className="text-green-500 text-xl opacity-0 group-hover:opacity-100 transition duration-300">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}
                    </li>

                    <li className="cursor-pointer hover:text-green-500 transition">
                        Reviews
                    </li>

                    <li className="cursor-pointer hover:text-green-500 transition">
                        Blog
                    </li>

                </ul>

                {/* Desktop Button */}
                <button className="hidden lg:block bg-green-500 px-6 py-3 rounded-md hover:bg-green-600 transition">
                    Get your free website review →
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="lg:hidden text-3xl"
                >
                    ☰
                </button>

                {/* Mobile Menu */}
                {mobileMenu && (
                    <div className="absolute top-full left-0 w-full bg-[#161E2E] lg:hidden shadow-lg">

                        <ul className="flex flex-col items-center gap-6 py-6">

                            <li>Who we are</li>

                            <li
                                onClick={() => setShowMenu(!showMenu)}
                                className="cursor-pointer"
                            >
                                What we do
                            </li>

                            {showMenu && (
                                <div className="w-[90%] bg-white rounded-xl p-4">

                                    {services.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-3 rounded-lg hover:bg-green-100"
                                        >
                                            <h3 className="text-black font-semibold">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}

                                </div>
                            )}

                            <li>Reviews</li>

                            <li>Blog</li>

                            <button className="bg-green-500 px-6 py-3 rounded-md">
                                Get your free website review  →
                            </button>

                        </ul>

                    </div>



                )}
            </div>
        </nav>

    );
}
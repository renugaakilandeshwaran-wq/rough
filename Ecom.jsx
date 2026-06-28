import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const blogs = [
    {
        image: img1,
        category: "Marketing",
        title: "Online marketing step by step",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
    },
    {
        image: img2,
        category: "Marketing",
        title: "Online marketing step by step",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
    },
    {
        image: img3,
        category: "Marketing",
        title: "Online marketing step by step",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
    },
];

export default function Ecom() {
    return (
        <section className="bg-[#161E2E] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-white text-4xl font-bold leading-tight">
                        Why you need multiple
                        <br />
                        marketing strategies
                    </h2>

                    <p className="text-gray-300 mt-4 text-lg">
                        Choose your best ecommerce store
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#161E2E] rounded-2xl overflow-hidden border-0 border-green-500 shadow-[0_0_25px_rgba(34,197,94,0.35)]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover"
                            />

                            <div className="p-6">
                                <p className="text-green-400 font-semibold mb-4">
                                    {item.category}
                                </p>

                                <h3 className="text-white text-2xl font-semibold leading-snug mb-5">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-8 mb-8">
                                    {item.desc}
                                </p>

                                <button className="bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-md text-white font-medium">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
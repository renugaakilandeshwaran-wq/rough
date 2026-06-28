import React from "react";

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
        name: "Client name",
        post: "Post",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
        name: "Client name",
        post: "Post",
    },
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
        name: "Client name",
        post: "Post",
    },
];

export default function Testimonial() {
    return (
        <section className="bg-[#161E2E] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-white text-4xl font-bold mb-6">
                        What our client say
                    </h2>

                    <p className="text-gray-300 text-lg">
                        We are flexible and cope with multiple tasks to make you a leader in the market.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {testimonials.map((item, index) => (
                        <div
                            key={index} className={`bg-[#1D2638] min-h-[390px] w-[400px] rounded-2xl p-10 border border-transparent transition-all duration-300 ${index === 1
                                ? "border-green-500/20 shadow-[0_0_45px_rgba(34,197,94,0.45)]"
                                : ""
                                }`}
                        ><div className="relative mb-8">
                                <span className="absolute -top-10 left-0 text-white text-[120px] leading-none opacity-70">
                                    “
                                </span>

                                <p className="relative text-gray-300 italic leading-8 pt-8">
                                    {item.text}
                                </p>
                            </div>

                            {/* Client */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white"></div>

                                <div>
                                    <h4 className="text-white font-semibold">
                                        {item.name}
                                    </h4>

                                    <p className="text-gray-400 text-sm">
                                        {item.post}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
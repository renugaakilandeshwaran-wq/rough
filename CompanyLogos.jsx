import React from "react";
import logoss from "../assets/logoss.png";

export default function CompanyLogos() {
    return (
        <section className="bg-[#161E2E] py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-center items-center">
                    <img
                        src={logoss}
                        alt="Company Logos"
                        className="
                            w-full
                            max-w-6xl
                            object-contain
                        "
                    />
                </div>

            </div>
        </section>
    );
}
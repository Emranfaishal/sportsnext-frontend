import Image from "next/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const SportBanner = () => {
    return (
        <div className="relative bg-[#0F172A] min-h-screen flex items-center overflow-hidden">

            {/* Background Blur Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A358] opacity-10 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side */}
                <div className="space-y-6">

                    {/* Badge */}
                    <div className="inline-block px-4 py-1 rounded-full bg-[#C5A358]/10 border border-[#C5A358]/20">
                        <span className="text-[#C5A358] text-sm font-medium">
                            ✨ Mens football• May 20, 2026
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                        Luis Enrique:We can look forward to a <br />
                        <span className="text-[#C5A358]"> truly great final</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                        The Paris Saint-Germain manager gave his thoughts on the UEFA Champions League final at a press conference ten days out from the showpiece clash with Arsenal in Budapest.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-[#C5A358] hover:bg-[#b89344] text-[#0F172A] font-semibold px-8 py-3 rounded-xl transition duration-300">
                            Teamwork
                        </button>

                        <button className="border border-gray-700 text-white hover:bg-gray-800 px-8 py-3 rounded-xl transition duration-300">
                            The Evolution Of Foootball
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 pt-8 border-t border-gray-800">
                        <div>
                            <h3 className="text-2xl font-bold text-white">120+</h3>
                            <p className="text-gray-500 text-sm">Football PSG</p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">8K+</h3>
                            <p className="text-gray-500 text-sm">UEFA Champions League</p>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative">

                    {/* Main Image */}
                    <div className="relative z-20 rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/banner.jpg"
                            alt="Study Room"
                            width={700}
                            height={500}
                        />
                    </div>

                    {/* Floating Card */}
                    <div className="absolute -bottom-6 -left-6 z-30 bg-[#1E293B] p-5 rounded-2xl border border-gray-700 shadow-xl hidden md:block">
                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 bg-[#C5A358] rounded-full flex items-center justify-center text-black">
                                <IoMdCheckmark size={24} />
                            </div>

                            <div>
                                <p className="text-white font-semibold">
                                    In this article
                                </p>
                                <p className="text-gray-400 text-sm">
                                    UEFA Champions League - 2 hours
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SportBanner;
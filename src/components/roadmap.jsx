import React from "react";
import bgImg from "../assets/images/img4.jpeg";

const Roadmap = () => {
    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-10"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            {/* Main light overlay */}
            <div className="absolute inset-0 bg-[#f9f7ed]/90"></div>

            {/* Top fade into bg-[#1C1C2A] */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1C1C2A] to-transparent pointer-events-none"></div>

            {/* Bottom fade into bg-[#1C1C2A] */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1C1C2A] to-transparent pointer-events-none"></div>

            <div className="relative max-w-6xl mx-auto text-center px-6 md:px-12 w-full">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 mb-4">
                    Roadmap
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-20">
                    we don’t follow roadmaps, we follow visions.
                </p>

                <div className="relative w-full">
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 top-1/2 md:top-10 w-full md:w-[90%] h-1 bg-gray-300 z-0"
                        style={{ top: "50%", height: "2px" }}
                    ></div>
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-black font-semibold w-full z-10">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-lg md:text-xl mb-2">PHASE 1</span>
                            <div className="w-4 h-4 bg-slate-500 border-2 border-black rounded-full mb-2 md:mb-4 z-10"></div>
                            <p className="text-md md:text-base lg:text-lg">
                                Genesis collection and foundation
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-lg md:text-xl mb-2">PHASE 2</span>
                            <div className="w-4 h-4 bg-slate-500 border-2 border-black rounded-full mb-2 md:mb-4 z-10"></div>
                            <p className="text-md md:text-base lg:text-lg">Expansion and growth</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-lg md:text-xl mb-2">PHASE 3</span>
                            <div className="w-4 h-4 bg-slate-500 border-2 border-black rounded-full mb-2 md:mb-4 z-10"></div>
                            <p className="text-md md:text-bas lg:text-lg">
                                Gaming and ecosystem development
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-lg md:text-xl mb-2">PHASE 4</span>
                            <div className="w-4 h-4 bg-slate-500 border-2 border-black rounded-full mb-2 md:mb-4 z-10"></div>
                            <p className="text-md md:text-base lg:text-lg">
                                Gen2 collection and future growth
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="inline-block rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                        <a
                            href="/Roadmap"
                            className="block rounded-md bg-gray-800 text-white font-semibold px-6 py-3 shadow hover:bg-gray-100 hover:text-black transition cursor-pointer"
                        >
                            VIEW COMPLETE ROADMAP
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;

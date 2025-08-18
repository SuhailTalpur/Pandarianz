import React from "react";
import img1 from "../assets/images/img-2.png";
import img2 from "../assets/images/img-3.png";
import img3 from "../assets/images/img-1.png";

function ArtGallery() {
    return (
        <section className="w-full min-h-screen bg-[#1C1C2A] text-white p-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-8">
                <h1 className="text-4xl md:text-6xl font-bold p-2 md:p-4">
                    Art Gallery
                </h1>
                <p className="text-base md:text-lg max-w-lg p-2 md:p-4">
                    Tip: You can add music, videos or other media. Go to more on the side panel then look to Embeds
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 p-4 text-black">
                <div className="bg-white/70 flex flex-col text-center space-y-2 p-4 rounded-2xl shadow-xl shadow-blue-500/50 w-full sm:w-80">
                    <img src={img1} alt="Art 1" className="w-48 h-48 sm:w-60 sm:h-60 mx-auto object-cover" />
                    <h1 className="text-lg md:text-xl font-bold">Step 1</h1>
                    <p className="text-sm md:text-base">
                        Bright ideas spark progress, turning small actions into meaningful change across lives and communities.
                    </p>
                </div>

                <div className="bg-white/70 flex flex-col text-center space-y-2 p-4 rounded-2xl shadow-xl shadow-blue-500/50 w-full sm:w-80">
                    <img src={img2} alt="Art 2" className="w-48 h-48 sm:w-60 sm:h-60 mx-auto object-cover" />
                    <h1 className="text-lg md:text-xl font-bold">Step 2</h1>
                    <p className="text-sm md:text-base">
                        Bright ideas spark progress, turning small actions into meaningful change across lives and communities.
                    </p>
                </div>

                <div className="bg-white/70 flex flex-col text-center space-y-2 p-4 rounded-2xl shadow-xl shadow-blue-500/50 w-full sm:w-80">
                    <img src={img3} alt="Art 3" className="w-48 h-48 sm:w-60 sm:h-60 mx-auto object-cover" />
                    <h1 className="text-lg md:text-xl font-bold">Step 3</h1>
                    <p className="text-sm md:text-base">
                        Bright ideas spark progress, turning small actions into meaningful change across lives and communities.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ArtGallery;

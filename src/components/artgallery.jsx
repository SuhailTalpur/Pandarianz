import React from "react";
import img1 from "../assets/images/artgallery1.jpeg";
import img2 from "../assets/images/artgallery2.jpeg";
import img3 from "../assets/images/artgallery3.jpeg";
import img4 from "../assets/images/artgallery4.jpeg";
import img6 from "../assets/images/artgallery6.jpeg";
import img7 from "../assets/images/artgallery7.jpeg";
import img8 from "../assets/images/artgallery8.jpeg";
import img9 from "../assets/images/artgallery9.jpeg";
import img10 from "../assets/images/artgallery10.jpeg";

function ArtGallery() {
    return (
        <section className="w-full min-h-screen bg-[#1C1C2A] text-white p-4 flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold p-2 md:p-4">
                    Art Gallery
                </h1>
            </div>
            <div className="w-full overflow-x-hidden py-8 flex justify-center">
                <div className="relative w-full flex justify-center">
                    <div
                        className="flex gap-8 animate-slide-gallery justify-center items-center"
                        style={{
                            width: "max-content",
                            animation: "slideGallery 18s linear infinite"
                        }}
                    >
                        {[img1, img2, img3, img4, img6, img7, img8, img9, img10, img1, img2, img3, img4, img6, img7, img8, img9, img10].map((img, idx) => (
                            <div
                                key={idx}
                                className="bg-white/70 rounded-2xl shadow-xl shadow-blue-500/50 flex items-center justify-center"
                                style={{ minWidth: "200px", minHeight: "200px" }}
                            >
                                <img
                                    src={img}
                                    alt={`Art ${idx % 9 + 1}`}
                                    className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>
                {`
                @keyframes slideGallery {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-slide-gallery {
                    display: flex;
                }
                `}
            </style>
        </section>
    );
}

export default ArtGallery;
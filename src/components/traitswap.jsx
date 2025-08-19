import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import traitimg from "../assets/images/traitswap.jpeg";

function TraitSwap() {
    return (
        <div className="w-full min-h-screen p-5 bg-[#1C1C2A] text-white flex flex-col lg:flex-row justify-center items-center gap-10">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-2xl p-[3px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                <img
                    src={traitimg}
                    alt="Trait"
                    className="w-full h-auto object-contain rounded-xl"
                />
            </div>
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 space-y-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">WHEN?</h1>
                    <p className="text-base md:text-lg text-gray-200">
                        Available now
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">HOW TO?</h1>
                    <p className="text-base md:text-lg text-gray-200">
                        Navigate through the trait store and find your desired new traits
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">HOW OFTEN ARE UPGRADES?</h1>
                    <p className="text-base md:text-lg text-gray-200">
                        We will update the trait store regularly, giving users new and updated looks
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">CAN WE WIN?</h1>
                    <p className="text-base md:text-lg text-gray-200">
                        You can win new traits for completing simple quests and being the boss in our rumble games on Discord
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TraitSwap;
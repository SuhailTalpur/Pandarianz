import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Roadmap() {
    const navigate = useNavigate();
    
    return (
        <div className='bg-[#1C1C2A] w-full h-screen p-5 sm:px-20 md:px-30 lg:px-50'>
            <button
                onClick={() => navigate("/")}
                className="absolute top-4 right-4 text-white text-3xl hover:text-red-400 transition-colors z-50"
                aria-label="Close"
            >
                &#10005;
            </button>
            <ol className="border-l border-neutral-300 dark:border-neutral-500 ">
                <li>
                    <div className="flex-start flex items-center pt-3">
                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            Phase 1
                        </p>
                    </div>
                    <div className="mb-6 ml-4 mt-2">
                        <h4 className="mb-1.5 te    xt-xl font-semibold text-white">
                            Genesis Collection and Foundation
                        </h4>
                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Develop and launch the Panda Mate bot
                            Develop and deploy the AI-powered moderator bot
                            Design and launch the official Pandarianz website
                            Launch 1111, OG, WL free mint
                            Public mint for remaining Pandarianz NFTs $10
                            List on secondary marketplaces. Treasure chest giveaways
                            Establish initial partnerships and collaborations
                            Introduce the $CANE token
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex-start flex items-center pt-2">
                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            Phase 2
                        </p>
                    </div>
                    <div className="mb-6 ml-4 mt-2">
                        <h4 className="mb-1.5 text-xl font-semibold text-white">
                            Expansion and Growth
                        </h4>
                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Build out the Pandarianz community and engage in events
                            Implement NFT staking
                            Trading day, from points to $CANE. Treasure chest giveaways
                            Establish additional partnerships and collaborations
                            Create and launch exclusive merchandise
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex-start flex items-center pt-2">
                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            Phase 3
                        </p>
                    </div>
                    <div className="ml-4 mt-2 pb-5">
                        <h4 className="mb-1.5 text-xl font-semibold text-white">
                            Gaming and Ecosystem Development
                        </h4>
                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Launch the Gen 1 Pandarianz NFTs
                            Begin development on the P2E idle game
                            Introduce exclusive events and contests for holders
                        </p>
                    </div>
                </li>
                <li>
                    <div className="flex-start flex items-center pt-2">
                        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            Phase 4
                        </p>
                    </div>
                    <div className="ml-4 mt-2 pb-5">
                        <h4 className="mb-1.5 text-xl font-semibold text-white">
                            Gen 2 Collection and Future Growth
                        </h4>
                        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Develop and launch the Gen 2 Pandarianz collection
                            Launch the P2E idle game and introduce additional gameplay mechanics
                            Expand marketing efforts and community outreach
                            Introduce additional benefits for $CANE token holders
                            Continue to scale partnerships and collaborations
                            Expand the custom merchandise offerings
                            Implement a comprehensive community engagement program to foster growth and reinvestment
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    );
}
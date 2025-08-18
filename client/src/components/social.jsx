import React from "react";
import logo1 from "../assets/images/MElogo.png";
import logo2 from "../assets/images/img4.jpeg";
import logo3 from "../assets/images/xlogo.png";

const Social = () => {
  return (
    <div className="w-full min-h-screen bg-yellow-50 flex justify-center items-center px-2 py-8">
      <div className="w-full max-w-5xl flex flex-col justify-center items-center p-10 sm:p-4 md:p-8 shadow-xl/30 bg-slate-100 rounded-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 text-center">Socials</h1>
        <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="https://magiceden.io/marketplace/the_pandarianz" className="card cursor-pointer shadow-xl/20" target="_blank">
            <div className="icon">
              <img src={logo1} alt="" className="w-12 h-12" />
            </div>
            <strong>Magic Eden</strong>
            <div className="card__body">Our NFT collection in a Marketplace.</div>
            <span>Visit</span>
          </a>
          <a href="https://www.traitstore.app/pandarianz" className="card cursor-pointer shadow-xl/20" target="_blank">
            <div className="icon">
              <img src={logo2} alt="" className="w-12 h-12" />
            </div>
            <strong>Traitstore</strong>
            <div className="card__body">Customize your NFT in Traitshop</div>
            <span>Visit</span>
          </a>
          <a href="https://www.nftstake.app/pandarianz" className="card cursor-pointer shadow-xl/20" target="_blank">
            <div className="icon">
              <img src={logo2} alt="" className="w-12 h-12" />
            </div>
            <strong>Stake NFT</strong>
            <div className="card__body">Staking for our NFT holders</div>
            <span>Visit</span>
          </a>
          <a href="https://x.com/ThePandarianz" className="card cursor-pointer shadow-xl/20" target="_blank">
            <div className="icon">
              <img src={logo3} alt="" className="w-12 h-12" />
            </div>
            <strong>Twitter</strong>
            <div className="card__body">Follow us for latest updates</div>
            <span>Visit</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
import React, { useEffect, useState } from "react";
import Header from '../components/header';


import loadingGif from "../assets/images/loading.gif";
import Roadmap from "../components/roadmap.jsx";
import TraitSwap from "../components/traitswap";
import Social from "../components/social";
import ArtGallery from "../components/artgallery";
import Footer from "../components/footer";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading, replace with your actual loading logic if needed
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          background: "#f9f9f9",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={loadingGif} alt="Loading..." style={{ width: 280, height: 200 }} />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="traitswap">
        <TraitSwap />
      </div>
      <div id="socials">
        <Social />
      </div>
      <div id="artgallery">
        <ArtGallery />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
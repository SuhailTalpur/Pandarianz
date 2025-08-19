import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1C1C2A] text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mt-2">
          &copy; {new Date().getFullYear()} All Rights reserved The Pandarianz.
        </p>


      </div>
    </footer>

  );
}

export default Footer;

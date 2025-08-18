import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1C1C2A] text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Made with ❤️ by Xytra Lab</p>
      </div>
    </footer>
  );
}

export default Footer;

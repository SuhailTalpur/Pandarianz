import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1C1C2A] text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Made with ❤️ by{" "}
          <a
            href="https://x.com/XytraLab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Xytra Lab
          </a>
        </p>
      </div>
    </footer>

  );
}

export default Footer;

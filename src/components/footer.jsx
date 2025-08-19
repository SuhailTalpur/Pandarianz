import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1C1C2A] text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mt-2">
          &copy; {new Date().getFullYear()} All Rights reserved Pandarianz.
        </p>
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://x.com/orangutanxlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Orangutan Lab
          </a>
        </p>

      </div>
    </footer>

  );
}

export default Footer;

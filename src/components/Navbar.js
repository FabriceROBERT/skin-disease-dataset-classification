import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full h-[10vh] px-6 flex justify-between items-center bg-slate-800 text-white">
      <div>Logo</div>
      <ul className="flex gap-x-4">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

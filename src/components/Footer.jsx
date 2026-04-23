import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:py-10 px-5">
      <div className="screen-max-width">
        <div className="">
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <a
              href="https://www.apple.com/in/retail/"
              target="_blank"
              className="underline text-blue"
            >
              Find and Apple store{" "}
            </a>
            or{" "}
            <a
              href="https://www.apple.com/in/buy/"
              target="_blank"
              className="underline text-blue"
            >
              other retailer{" "}
            </a>
            near you.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-gray text-xs font-semibold">Or call</p>
            <a
              href="tel:0008000401966"
              className="font-semibold text-xs underline text-blue"
            >
            000800 040 1966
            </a>
          </div>
        </div>

        <div className="bg-neutral-700 my-5 h-px w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

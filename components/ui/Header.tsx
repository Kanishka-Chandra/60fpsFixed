import Link from 'next/link'
import React, { Fragment, useState, useEffect } from "react";
import SparklesText from "@/components/ui/SparklesText";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  const SCROLL_THRESHOLD = 200; // Adjust this value as you see fit

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop && st > SCROLL_THRESHOLD)
      {
        setIsVisible(false);
      } else if (st < lastScrollTop || st <= SCROLL_THRESHOLD)
      {
        setIsVisible(true);
      }

      setAtTop(st === 0);

      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ease-in-out font-montserrat  transform ${isVisible ? "translate-y-0" : "-translate-y-full"
      } ${atTop
        ? "bg-black bg-opacity-100 text-white"
        : "bg-white bg-opacity-100 text-black backdrop-blur-sm"
      }`}>
      <div className="max-w-none mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          {/* <div className="shrink-0 mr-4">
            <h1 className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-0 pt-2 pl-1 md:pt-1 md:pl-1">
              {atTop ? (
                <span className="bg-clip-text md:text-5xl font-black font-cabinet-grotesk text-transparent text-white">
                  60fps
                </span>
              ) : (
                (mobileMenuOpen || !atTop) && (
                  <span className=" font-black md:text-5xl font-cabinet-grotesk   text-black">
                    60fps
                  </span>
                )
              )}
            </h1>
          </div> */}
          <SparklesText text="60fps" sparklesCount={8} className=" font-black md:text-5xl font-cabinet-grotesk " />
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link className="btn inline-flex items-center border-white text-white  border-solid border-2 border-white  group" href="/signin">
                  Sign in
                </Link>
              </li>
              <li className="ml-4">
                <Link className="btn inline-flex items-center text-gray-900 bg-white hover:bg-gray-100 group" href="/schedule-call">
                  Contact Us

                </Link>
              </li> */}
              <div className="shrink-0 ">
                {/* <h1 className="text-3xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-0 pt-2 pl-1 md:pt-1 md:pl-1"> */}
                {atTop ? (

                  <Link className="btn inline-flex items-center text-gray-900 bg-white hover:bg-gray-100 group" href="/schedule-call">
                    Contact Us

                  </Link>
                ) : (
                  (mobileMenuOpen || !atTop) && (
                    <Link className="btn inline-flex items-center text-white bg-gray-900 hover:bg-gray-100 group" href="/schedule-call">
                      Contact Us

                    </Link>
                  )
                )}
                {/* </h1> */}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

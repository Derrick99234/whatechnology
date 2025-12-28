"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
}

// --- Header Component ---
const NavLink: FC<NavLinkProps> = ({
  href,
  children,
  isMobile = false,
  onClick,
}) => (
  <a
    href={href}
    className={`
      px-3 py-2 rounded-lg text-sm font-medium transition duration-300 ease-in-out
      ${
        isMobile
          ? "block text-gray-200 hover:bg-green-600 hover:text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }
    `}
    onClick={() => {
      if (isMobile && onClick) onClick();
    }}
  >
    {children}
  </a>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState<boolean>(false);

  // A helper component for navigation links

  return (
    <header className="bg-[#020617] text-white shadow-xl sticky top-0 z-50">
      {/* <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-full bg-green-500/20 blur-[140px] rounded-full pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Company Name */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-wider text-green-400 hover:text-green-300 transition duration-300"
            >
              <Image
                src="/logo.jpeg"
                width={200}
                alt="Whatechnogy Logo"
                height={50}
                className="inline-block mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            <NavLink href="/services">Services</NavLink>
            <div className="relative group">
              <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300">
                Solution
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 z-100 mt-2 w-56 bg-gray-800 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a
                  href="/solution/ai-ml"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-green-600 rounded-t-xl"
                >
                  AI & ML
                </a>
                <a
                  href="/solution/cloud-services"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-green-600"
                >
                  Cloud Services
                </a>
                <a
                  href="/solution/cyber-security"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-green-600"
                >
                  Cyber Security
                </a>
                <a
                  href="/solution/big-data"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-green-600 rounded-b-xl"
                >
                  Big Data
                </a>
              </div>
            </div>

            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <a
              href="/contact"
              className="ml-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-[1.02]"
            >
              Start Demo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-150"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <NavLink
              href="/services"
              isMobile
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <div>
              <button
                onClick={() => setIsSolutionOpen(!isSolutionOpen)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:bg-green-600 hover:text-white transition"
              >
                Solution
              </button>

              {isSolutionOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <a
                    href="/solution/ai-ml"
                    className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI & ML
                  </a>
                  <a
                    href="/solution/cloud-services"
                    className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cloud Services
                  </a>
                  <a
                    href="/solution/cyber-security"
                    className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cyber Security
                  </a>
                  <a
                    href="/solution/big-data"
                    className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Big Data
                  </a>
                </div>
              )}
            </div>

            <NavLink
              href="/about"
              isMobile
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              href="/contact"
              isMobile
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <a
              href="/contact"
              className="mt-3 block w-full text-center px-4 py-2 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Start Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

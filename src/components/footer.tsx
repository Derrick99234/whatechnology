import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { FC } from "react";

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

// --- Footer Component ---
const FooterColumn: FC<FooterColumnProps> = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-3">{children}</ul>
  </div>
);

// Simple link wrapper
const FooterLink: FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-sm hover:text-indigo-400 transition duration-300 ease-in-out"
    >
      {children}
    </a>
  </li>
);

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          {/* Column 1: Company Info */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-2xl font-extrabold text-indigo-400">
              Whatechnogy
            </h3>
            <p className="text-sm">
              Innovating the future of technology, delivering high-impact
              solutions globally.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-5 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-white transition duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-white transition duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <FooterColumn title="Solutions">
            <FooterLink href="/ai">AI &amp; ML</FooterLink>{" "}
            {/* Using HTML entity for '&' */}
            <FooterLink href="/cloud">Cloud Services</FooterLink>
            <FooterLink href="/security">Cyber Security</FooterLink>
            <FooterLink href="/data">Big Data</FooterLink>
          </FooterColumn>

          {/* Column 3: Company */}
          <FooterColumn title="Company">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/blog">Our Blog</FooterLink>
            <FooterLink href="/partners">Partners</FooterLink>
          </FooterColumn>

          {/* Column 4: Contact */}
          <FooterColumn title="Contact">
            <li className="flex items-center space-x-2">
              <Mail size={16} className="text-gray-500" />
              <a
                href="mailto:info@whatechnogy.com"
                className="text-sm hover:text-indigo-400"
              >
                info@whatechnogy.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-gray-500" />
              <p className="text-sm">+1 (555) TECH-NOW</p>
            </li>
            <FooterLink href="/support">Support Center</FooterLink>
          </FooterColumn>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-xs font-light text-gray-500">
            &copy; {currentYear} **Whatechnogy**. All rights reserved. |
            <a href="/privacy" className="hover:text-indigo-400 mx-1">
              Privacy Policy
            </a>{" "}
            |
            <a href="/terms" className="hover:text-indigo-400 mx-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

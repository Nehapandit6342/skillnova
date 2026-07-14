import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              Skill<span className="text-blue-500">Nova</span>
            </Link>

            <p className="mt-5 leading-7 text-slate-400">
              AI-powered internship and career development platform helping
              students become industry-ready through personalized learning,
              resume analysis, and smart internship matching.
            </p>

            <div className="mt-6 flex gap-4 text-xl">
              <a
                href="https://github.com"
                className="transition hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                className="transition hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com"
                className="transition hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Platform */}

          <div>
            <h3 className="text-lg font-semibold text-white">Platform</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/internships">Internships</Link>
              </li>
              <li>
                <Link to="/resume">Resume Builder</Link>
              </li>
              <li>
                <Link to="/roadmap">Career Roadmap</Link>
              </li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-blue-500" />
                <span>support@skillnova.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-blue-500" />
                <span>+977 9800000000</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-500" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SkillNova. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 lg:flex">
          <div className="flex flex-col justify-between p-12 text-white">
            <div>
              <Link to="/" className="text-3xl font-bold">
                Skill
                <span className="text-cyan-300">Nova</span>
              </Link>
            </div>

            <div className="max-w-md">
              <h2 className="text-5xl font-bold leading-tight">
                Build Your Career with AI
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-100">
                Analyze your resume, identify skill gaps, receive personalized
                learning roadmaps, and discover internships tailored to your
                career goals.
              </p>
            </div>

            <div className="text-sm text-blue-200">© 2026 SkillNova</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-10 text-center lg:hidden">
              <Link to="/" className="text-3xl font-bold text-slate-900">
                Skill
                <span className="text-blue-600">Nova</span>
              </Link>
            </div>

            <h1 className="text-3xl font-bold text-slate-900">{title}</h1>

            <p className="mt-2 text-slate-600">{subtitle}</p>

            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

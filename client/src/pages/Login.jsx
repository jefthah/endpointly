import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const location = useLocation();
  const isSignUp = location.pathname === "/sign-up";

  const [isDark, setIsDark] = React.useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased selection:bg-primary-new/30 relative overflow-hidden transition-colors duration-500">
      {/* Floating Logo and Icons (No Header Bar) */}
      <Link
        to="/"
        className="fixed top-4 left-6 z-50 text-xl font-bold text-primary-new tracking-tighter hover:opacity-80 transition-opacity"
      >
        Endpointly
      </Link>
      <div className="fixed top-4 right-6 z-50 flex items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-on-surface/5 transition-colors overflow-hidden border border-on-surface/5"
        >
          <span
            key={isDark ? "moon" : "sun"}
            className="material-symbols-outlined text-on-surface-variant animate-bounce-down text-[20px]"
          >
            {isDark ? "dark_mode" : "light_mode"}
          </span>
        </button>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary-new transition-colors">
          help
        </span>
      </div>

      <main className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side: Technical Branding */}
        <section className="hidden md:flex flex-1 relative overflow-hidden bg-surface flex-col justify-center px-16 lg:px-24">
          <div className="absolute inset-0 grid-pattern opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/90 to-primary-new/10"></div>

          {/* Postman-style Request Mockup (Top) */}
          <div className="absolute -right-10 top-[8%] w-[550px] opacity-80 hover:opacity-100 transition-all duration-500 pointer-events-auto -rotate-2 animate-float hover:scale-105 group cursor-default">
            <div className="glass-effect rounded-2xl overflow-hidden border border-primary-new/30 shadow-2xl group-hover:shadow-primary-new/20 group-hover:border-primary-new/50 transition-all">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-on-surface/5 bg-on-surface/5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="ml-2 px-2 py-0.5 rounded bg-on-surface/10 text-[9px] font-mono text-primary-new flex-1 border border-on-surface/5">
                  POST /v1/auth/login
                </div>
              </div>
              <div className="p-4 font-mono text-[10px] leading-relaxed text-on-surface/70 group-hover:text-on-surface transition-colors">
                <div><span className="text-primary-new font-semibold">"email"</span>: <span className="text-emerald-600 dark:text-emerald-400">"dev@endpointly.io"</span>,</div>
                <div><span className="text-primary-new font-semibold">"password"</span>: <span className="text-emerald-600 dark:text-emerald-400">"••••••••••••"</span>,</div>
                <div><span className="text-primary-new font-semibold">"rememberMe"</span>: <span className="text-amber-600 dark:text-amber-400">true</span>,</div>
                <div><span className="text-primary-new font-semibold">"metadata"</span>: {"{"}</div>
                <div className="pl-4"><span className="text-primary-new font-semibold">"browser"</span>: <span className="text-emerald-600 dark:text-emerald-400">"Chrome/124.0"</span>,</div>
                <div className="pl-4"><span className="text-primary-new font-semibold">"platform"</span>: <span className="text-emerald-600 dark:text-emerald-400">"Windows 11"</span>,</div>
                <div className="pl-4"><span className="text-primary-new font-semibold">"ip"</span>: <span className="text-emerald-600 dark:text-emerald-400">"192.168.1.1"</span></div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>

          {/* Response Mockup (Bottom) */}
          <div className="absolute -left-10 bottom-[8%] w-[500px] opacity-70 hover:opacity-100 transition-all duration-500 pointer-events-auto rotate-3 animate-float hover:scale-105 group cursor-default" style={{ animationDelay: '1s' }}>
            <div className="glass-effect rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-on-surface/5 bg-emerald-500/5">
                <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400">200 OK</span>
                <span className="text-[9px] text-on-surface/50">42ms</span>
              </div>
              <div className="p-4 font-mono text-[10px] leading-tight text-on-surface/70 group-hover:text-on-surface transition-colors">
                <div><span className="text-primary-new font-semibold">"status"</span>: <span className="text-emerald-600 dark:text-emerald-400">"success"</span>,</div>
                <div><span className="text-primary-new font-semibold">"token"</span>: <span className="text-emerald-600 dark:text-emerald-400">"eyJh..."</span></div>
              </div>
            </div>
          </div>

          {/* Collaboration Indicator */}
          <div className="absolute top-[45%] right-12 opacity-90 hover:opacity-100 transition-all duration-500 pointer-events-auto animate-float hover:scale-110 group cursor-default" style={{ animationDelay: '2s' }}>
            <div className="glass-effect p-3.5 rounded-2xl border border-primary-new/30 space-y-3.5 group-hover:shadow-primary-new/30 group-hover:border-primary-new/50 transition-all shadow-xl">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-40"></div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-on-surface/60 group-hover:text-primary-new transition-colors">Team Active</span>
              </div>
              <div className="flex -space-x-3 items-center pl-1">
                <div className="w-7 h-7 rounded-full ring-2 ring-surface bg-indigo-600 flex items-center justify-center text-[9px] text-white font-bold shadow-lg">JD</div>
                <div className="w-7 h-7 rounded-full ring-2 ring-surface bg-violet-600 flex items-center justify-center text-[9px] text-white font-bold shadow-lg">AS</div>
                <div className="w-7 h-7 rounded-full ring-2 ring-surface bg-primary-new flex items-center justify-center text-[9px] text-black font-black shadow-lg shadow-primary-new/20 transition-transform group-hover:scale-110">+2</div>
              </div>
            </div>
          </div>

          {/* Floating API Chips */}
          <div className="absolute top-[25%] left-[10%] opacity-60 animate-float pointer-events-none" style={{ animationDelay: '0.5s' }}>
            <div className="glass-effect px-3 py-1.5 rounded-lg border border-primary-new/20 flex items-center gap-2">
              <span className="text-[9px] font-bold text-emerald-400">GET</span>
              <span className="text-[9px] font-mono text-on-surface/60">/v1/users/me</span>
            </div>
          </div>
          <div className="absolute top-[65%] left-[5%] opacity-50 animate-float pointer-events-none" style={{ animationDelay: '3s' }}>
            <div className="glass-effect px-3 py-1.5 rounded-lg border border-primary-new/20 flex items-center gap-2">
              <span className="text-[9px] font-bold text-primary-new">POST</span>
              <span className="text-[9px] font-mono text-on-surface/60">/v1/webhooks</span>
            </div>
          </div>
          <div className="absolute bottom-[25%] right-[20%] opacity-50 animate-float pointer-events-none" style={{ animationDelay: '1.2s' }}>
            <div className="glass-effect px-3 py-1.5 rounded-lg border border-amber-400/20 flex items-center gap-2">
              <span className="text-[9px] font-bold text-amber-400">PATCH</span>
              <span className="text-[9px] font-mono text-on-surface/60">/v1/settings</span>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-8 max-w-lg">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary-new/10 border border-primary-new/20 text-primary-new text-xs uppercase font-semibold tracking-wider">
              <span className="material-symbols-outlined text-[14px]">
                terminal
              </span>
              <span>v4.2.0 Stable Release</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-on-surface leading-tight tracking-tight">
              Built for <span className="text-primary-new">developers</span>,
              <br />
              by developers.
            </h1>

            <p className="text-on-surface-variant text-lg leading-relaxed">
              The ultimate API infrastructure for modern engineering teams.
              Real-time observability, type-safe protocols, and edge-ready
              deployment in one unified workspace.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="font-mono text-primary-new text-2xl font-bold">
                  99.99%
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
                  Uptime SLA
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-primary-new text-2xl font-bold">
                  &lt;45ms
                </div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
                  Global Latency
                </div>
              </div>
            </div>
          </div>

          {/* API Methods Menu */}
          <div className="absolute bottom-12 right-12 z-20 animate-float pointer-events-auto" style={{ animationDelay: '1.5s' }}>
            <div className="glass-effect p-4 rounded-2xl border border-primary-new/20 shadow-2xl space-y-3 w-48">
              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm">GET</span>
                <span className="text-[11px] text-on-surface/60 group-hover:text-on-surface transition-colors">Fetch Resources</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary-new/10 text-primary-new border border-primary-new/20 shadow-sm">POST</span>
                <span className="text-[11px] text-on-surface/60 group-hover:text-on-surface transition-colors">Create Entry</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-sm">PUT</span>
                <span className="text-[11px] text-on-surface/60 group-hover:text-on-surface transition-colors">Update Data</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-500 border border-red-500/20 shadow-sm">DELETE</span>
                <span className="text-[11px] text-on-surface/60 group-hover:text-on-surface transition-colors">Remove Record</span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Form with Animation */}
        <section className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-surface relative z-10 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-surface via-surface/90 to-primary-new/5"></div>

          <div className="w-full max-w-[440px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={isSignUp ? "signup" : "login"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="glass-effect p-8 md:p-10 rounded-3xl shadow-2xl border border-on-surface/5 min-h-[640px] flex flex-col"
              >
                {/* Header */}
                <div className={isSignUp ? "mb-6 text-center md:text-left" : "mb-10 text-center md:text-left"}>
                  <h2 className="text-3xl font-bold text-on-surface mb-3 tracking-tight">
                    {isSignUp ? "Create Account" : "Welcome Back"}
                  </h2>
                  <p className="text-on-surface-variant text-sm font-medium">
                    {isSignUp 
                      ? "Join our developer community today." 
                      : "Enter your credentials to access your workspace."}
                  </p>
                </div>

                {/* Social Logins */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-on-surface/5 border border-on-surface/5 text-on-surface text-[13px] font-bold hover:bg-on-surface/10 hover:border-on-surface/10 transition-all active:scale-[0.98]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                    GitHub
                  </button>
                  <button className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-on-surface/5 border border-on-surface/5 text-on-surface text-[13px] font-bold hover:bg-on-surface/10 hover:border-on-surface/10 transition-all active:scale-[0.98]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
                    </svg>
                    Google
                  </button>
                </div>

                {/* Separator */}
                <div className={isSignUp ? "relative my-6" : "relative my-8"}>
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-on-surface/15"></span>
                  </div>
                  <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em] font-black text-on-surface/60">
                    <span className="bg-surface-container px-4 py-1.5 rounded-full border border-on-surface/15 shadow-sm">
                      {isSignUp ? "or sign up with email" : "or login with email"}
                    </span>
                  </div>
                </div>

                {/* Form */}
                <form className={isSignUp ? "space-y-4" : "space-y-6"} onSubmit={(e) => e.preventDefault()}>
                  {isSignUp && (
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-on-surface/50 ml-1" htmlFor="username">
                        Username
                      </label>
                      <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30 group-focus-within:text-primary-new transition-colors text-[20px]">
                          person
                        </span>
                        <input
                          className="w-full bg-surface-container-low border border-on-surface/15 rounded-2xl py-3.5 pl-12 pr-4 text-on-surface text-sm placeholder:text-on-surface/20 focus:outline-none focus:ring-2 focus:ring-primary-new/10 focus:border-primary-new/50 focus:bg-surface-container transition-all"
                          id="username"
                          placeholder="johndoe"
                          type="text"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label
                      className="text-[11px] font-bold uppercase tracking-wider text-on-surface/50 ml-1"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30 group-focus-within:text-primary-new transition-colors text-[20px]">
                        mail
                      </span>
                      <input
                        className="w-full bg-surface-container-low border border-on-surface/15 rounded-2xl py-3.5 pl-12 pr-4 text-on-surface text-sm placeholder:text-on-surface/20 focus:outline-none focus:ring-2 focus:ring-primary-new/10 focus:border-primary-new/50 focus:bg-surface-container transition-all"
                        id="email"
                        placeholder="name@company.com"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <label
                        className="text-[11px] font-bold uppercase tracking-wider text-on-surface/50"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      {!isSignUp && (
                        <a
                          className="text-[11px] font-bold text-primary-new hover:underline transition-all"
                          href="#"
                        >
                          Forgot Password?
                        </a>
                      )}
                    </div>
                    <div className="relative group">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/30 group-focus-within:text-primary-new transition-colors text-[20px]">
                        lock
                      </span>
                      <input
                        className="w-full bg-surface-container-low border border-on-surface/15 rounded-2xl py-3.5 pl-12 pr-4 text-on-surface text-sm placeholder:text-on-surface/20 focus:outline-none focus:ring-2 focus:ring-primary-new/10 focus:border-primary-new/50 focus:bg-surface-container transition-all"
                        id="password"
                        placeholder="••••••••"
                        type="password"
                      />
                    </div>
                  </div>

                  <button
                    className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-btn-from to-btn-to text-white font-bold text-base hover:shadow-[0_8px_20px_-4px_rgba(99,102,241,0.3)] active:scale-[0.99] transition-all duration-150 mt-4 shadow-lg border border-primary-new/20 hover:border-primary-new/40 shadow-primary-new/5"
                    type="submit"
                  >
                    {isSignUp ? "Create Account" : "Sign In to Workspace"}
                  </button>
                </form>

                {/* Footer Links */}
                <div className="mt-auto pt-6 border-t border-on-surface/5 text-center">
                  <p className="text-on-surface-variant text-sm font-medium">
                    {isSignUp ? "Already have an account?" : "New to Endpointly?"}
                    <Link
                      to={isSignUp ? "/login" : "/sign-up"}
                      className="text-primary-new font-bold hover:underline ml-1.5 transition-all"
                    >
                      {isSignUp ? "Sign in" : "Create an account"}
                    </Link>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Visual Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary-new/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary-container/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0"></div>
    </div>
  );
};

export default Login;


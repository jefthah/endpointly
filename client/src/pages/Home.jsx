import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const Home = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
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
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-new/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-new/10 border border-primary-new/20 text-xs font-semibold text-primary-new tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                v4.2.0 Open Source Release
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
              >
                Test APIs <span className="text-primary-new">Together.</span>
                <br />
                <span className="opacity-80">Minimalist & Free.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                The collaborative API client built for modern teams. 
                Zero paywalls, 100% open source. Build, test, and share 
                your endpoints in a unified, premium workspace.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  to="/login"
                  className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-btn-from to-btn-to rounded-2xl shadow-lg shadow-primary-new/20 hover:shadow-primary-new/30 hover:scale-[1.02] transition-all active:scale-[0.98]"
                >
                  Start Testing Now
                </Link>
                <a
                  href="#features"
                  className="w-full sm:w-auto px-8 py-4 text-base font-bold text-on-surface bg-surface-container-low border border-on-surface/10 rounded-2xl hover:bg-surface-container transition-all"
                >
                  Explore Features
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-12 pt-8"
              >
                <div className="space-y-1">
                  <div className="text-2xl font-mono font-bold text-primary-new">99.9%</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Uptime</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-mono font-bold text-primary-new">&lt;40ms</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Latency</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-mono font-bold text-primary-new">MIT</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">License</div>
                </div>
              </motion.div>
            </div>

            {/* Right: Technical Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative w-full max-w-2xl lg:max-w-none"
            >
              <div className="glass-effect rounded-3xl overflow-hidden border border-on-surface/5 shadow-2xl relative z-10">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-on-surface/5 bg-on-surface/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-4 px-3 py-1 rounded-lg bg-surface-container-lowest text-[11px] font-mono text-on-surface-variant flex-1 text-center border border-on-surface/5">
                    POST https://api.endpointly.io/v1/workspaces/invite
                  </div>
                </div>
                <div className="p-8 font-mono text-sm leading-relaxed">
                  <div className="flex items-center gap-3 mb-6 bg-surface-container-low border border-on-surface/10 rounded-xl p-2">
                    <div className="px-3 py-1.5 bg-green-500/10 text-green-500 rounded-lg font-bold text-xs border border-green-500/20">
                      POST
                    </div>
                    <div className="text-on-surface/70 text-xs truncate">
                      https://api.endpointly.io/v1/workspaces/invite
                    </div>
                    <div className="ml-auto px-4 py-1.5 bg-primary-new text-white rounded-lg font-sans font-bold text-xs cursor-pointer hover:opacity-90 transition-opacity">
                      Send
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-on-surface/40 text-xs uppercase tracking-tighter font-bold">Request Body</div>
                    <div className="text-on-surface/80 bg-surface-container-lowest/50 p-4 rounded-xl border border-on-surface/5">
                      <span className="text-primary-new">{"{"}</span><br />
                      &nbsp;&nbsp;<span className="text-primary-new/70">"email"</span>: <span className="text-emerald-500">"dev@endpointly.io"</span>,<br />
                      &nbsp;&nbsp;<span className="text-primary-new/70">"role"</span>: <span className="text-emerald-500">"editor"</span>,<br />
                      &nbsp;&nbsp;<span className="text-primary-new/70">"workspace"</span>: <span className="text-emerald-500">"marketing-api"</span><br />
                      <span className="text-primary-new">{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accents */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-new/10 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="absolute top-[35%] -right-12 glass-effect p-4 rounded-2xl border border-primary-new/30 animate-float shadow-xl hidden md:block z-20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-on-surface/60">Live Testing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-24 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary-new font-black uppercase tracking-[0.3em] text-[10px]"
            >
              The Infrastructure
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-on-surface"
            >
              Everything you need, <span className="text-primary-new">nothing you don't.</span>
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
            {/* Real-time Sync - Large Bento Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="md:col-span-8 md:row-span-2 glass-effect rounded-[40px] border border-on-surface/5 p-10 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="relative z-10 space-y-4 max-w-md">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-indigo-500 text-3xl">groups</span>
                </div>
                <h4 className="text-3xl font-bold text-on-surface">Real-time Collaboration</h4>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Work on the same collections with your team in real-time. 
                  Every edit, test, and environment change is synced instantly 
                  across all clients. No more export/import hell.
                </p>
              </div>

              {/* Mini Visual for the card */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-indigo-500/20 rounded-full animate-ping-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-indigo-500/40 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 shadow-xl"></div>
                  <div className="w-12 h-12 rounded-full bg-emerald-500 shadow-xl"></div>
                  <div className="w-12 h-12 rounded-full bg-amber-500 shadow-xl"></div>
                </div>
              </div>
            </motion.div>

            {/* Fast as Light - Tall Bento Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 md:row-span-2 bg-primary-new text-white rounded-[40px] p-10 flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-primary-new/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-8 backdrop-blur-md">
                  <span className="material-symbols-outlined text-white text-3xl">bolt</span>
                </div>
                <h4 className="text-2xl font-bold mb-4">Fast as Light</h4>
                <p className="text-white/80 leading-relaxed">
                  No Electron bulk. Native performance in your browser or 
                  self-hosted on your private infrastructure.
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/10">
                <div className="text-4xl font-mono font-black text-white">12ms</div>
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-60 mt-1">Local Latency</div>
              </div>
            </motion.div>

            {/* Security First - Wide Bento Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-12 md:row-span-1 glass-effect rounded-[40px] border border-on-surface/5 p-10 flex flex-col md:flex-row items-center gap-10 group"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="material-symbols-outlined text-emerald-500 text-3xl">shield_lock</span>
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-2xl font-bold text-on-surface">Enterprise-Grade Security</h4>
                <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                  Automatic token management and local-first data options to keep your secrets secret. 
                  We don't store your sensitive data; you keep the keys.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <div className="px-4 py-2 rounded-xl bg-on-surface/5 text-[10px] font-bold uppercase tracking-widest text-on-surface/40 border border-on-surface/5">AES-256</div>
                <div className="px-4 py-2 rounded-xl bg-on-surface/5 text-[10px] font-bold uppercase tracking-widest text-on-surface/40 border border-on-surface/5">JWT Auto-Refresh</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Collaboration Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative order-2 lg:order-1"
            >
              <div className="glass-effect rounded-3xl border border-on-surface/5 shadow-2xl overflow-hidden min-h-[400px] flex flex-col">
                <div className="bg-on-surface/5 px-6 py-4 border-b border-on-surface/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-surface flex items-center justify-center text-[10px] font-bold text-white shadow-lg">JD</div>
                      <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-surface flex items-center justify-center text-[10px] font-bold text-white shadow-lg">AS</div>
                    </div>
                    <span className="text-xs font-bold text-on-surface/40 uppercase tracking-widest">Active Collab</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-tighter">Connected</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col gap-4 font-mono">
                  {/* API Header with animated Send click */}
                  <div className="p-3 bg-surface-container-low border border-on-surface/10 rounded-xl flex items-center gap-3 relative overflow-hidden">
                    <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">GET</span>
                    <span className="text-xs text-on-surface/70 truncate flex-1">https://api.endpointly.io/v1/users/me</span>
                    
                    <motion.div
                      animate={{ 
                        scale: [1, 0.95, 1],
                        backgroundColor: ["#6366f1", "#4f46e5", "#6366f1"]
                      }}
                      transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2], delay: 1 }}
                      className="px-4 py-1.5 bg-primary-new text-white rounded-lg text-[10px] font-bold relative z-10"
                    >
                      Send
                    </motion.div>

                    {/* John's Cursor clicking Send */}
                    <motion.div 
                      animate={{ 
                        x: [150, 300, 300, 300, 150],
                        y: [50, 0, 0, 0, 50],
                        scale: [1, 1, 0.9, 1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute top-8 left-10 pointer-events-none z-30"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M0 0L14 4.5L7.5 7.5L4.5 14L0 0Z" fill="#6366f1" />
                      </svg>
                      <div className="ml-3 mt-2 px-2 py-0.5 bg-indigo-500 text-white text-[8px] font-bold rounded shadow-xl">John</div>
                    </motion.div>
                  </div>

                  {/* Shared Response Panel */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0, 0, 1, 1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="flex-1 p-5 bg-surface-container-lowest border border-on-surface/5 rounded-2xl relative"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-on-surface/30">RESPONSE</span>
                        <span className="text-[10px] font-bold text-green-500">200 OK</span>
                      </div>
                      <span className="text-[9px] text-on-surface/20">42ms</span>
                    </div>

                    <div className="space-y-2 text-[11px] leading-relaxed">
                      <div className="flex gap-2">
                        <span className="text-primary-new/50">"id"</span>: <span className="text-emerald-500">"user_01J9..."</span>
                      </div>
                      <div className="flex gap-2 relative">
                        <span className="text-primary-new/50">"email"</span>: <span className="text-emerald-500">"dev@endpointly.io"</span>
                        {/* Sarah's Cursor highlighting email */}
                        <motion.div 
                          animate={{ 
                            opacity: [0, 0, 0, 1, 0],
                            x: [0, 0, 50, 150, 150]
                          }}
                          transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.6, 0.8, 1] }}
                          className="absolute inset-0 bg-primary-new/10 border-l-2 border-primary-new z-0"
                        />
                        <motion.div 
                          animate={{ 
                            opacity: [0, 0, 0, 1, 0],
                            x: [0, 0, 60, 160, 160],
                            y: [0, 0, 20, 20, 20]
                          }}
                          transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.6, 0.8, 1] }}
                          className="absolute top-0 left-0 pointer-events-none z-30"
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M0 0L14 4.5L7.5 7.5L4.5 14L0 0Z" fill="#10b981" />
                          </svg>
                          <div className="ml-3 mt-2 px-2 py-0.5 bg-emerald-500 text-white text-[8px] font-bold rounded shadow-xl whitespace-nowrap">Sarah is checking...</div>
                        </motion.div>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-primary-new/50">"role"</span>: <span className="text-emerald-500">"admin"</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-new/5 blur-3xl rounded-full pointer-events-none"></div>
            </motion.div>


            {/* Right: Content */}
            <div className="flex-1 space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-primary-new font-black uppercase tracking-[0.2em] text-xs">
                  Team Collaboration
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
                  API Testing, <br />
                  <span className="text-primary-new">Reimagined for Teams.</span>
                </h3>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Stop copy-pasting JSON and sharing postman collections manually. 
                  Work together in live, shared workspaces where every change is 
                  synced instantly across your entire engineering team.
                </p>
              </div>

              <ul className="space-y-6">
                {[
                  {
                    title: "Shared Workspaces",
                    desc: "Create dedicated environments for your projects and invite team members with granular permissions.",
                    icon: "hub"
                  },
                  {
                    title: "Live Environment Sync",
                    desc: "Update an environment variable and it's instantly available to everyone. No more stale tokens.",
                    icon: "sync_alt"
                  },
                  {
                    title: "Collaborative Debugging",
                    desc: "See who's testing what in real-time. Share logs and response data with a single click.",
                    icon: "forum"
                  }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-on-surface/5 flex items-center justify-center group-hover:bg-primary-new/10 transition-colors">
                      <span className="material-symbols-outlined text-primary-new text-[24px]">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-on-surface mb-1">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight">
            Ready to experience <span className="text-primary-new">Endpointly?</span>
          </h2>
          <p className="text-lg text-on-surface-variant">
            Join thousands of developers building the future of APIs. 
            Open source, community driven, and always free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/login"
              className="px-8 py-4 bg-on-surface text-surface font-bold rounded-2xl hover:opacity-90 transition-all w-full sm:w-auto"
            >
              Get Started for Free
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              className="px-8 py-4 bg-surface-container border border-on-surface/10 text-on-surface font-bold rounded-2xl hover:bg-surface-container-low transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-on-surface/15 bg-surface py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/logo1.png" alt="Endpointly Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-on-surface tracking-tighter">Endpointly</span>
          </div>
          <p className="text-on-surface-variant text-sm">
            &copy; 2026 Endpointly. Built with passion for the developer community.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-on-surface-variant hover:text-primary-new transition-colors text-xs font-bold uppercase tracking-widest">Docs</a>
            <a href="#" className="text-on-surface-variant hover:text-primary-new transition-colors text-xs font-bold uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-on-surface-variant hover:text-primary-new transition-colors text-xs font-bold uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </footer>

      {/* Visual Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary-new/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary-container/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0"></div>
    </div>
  );
};

export default Home;


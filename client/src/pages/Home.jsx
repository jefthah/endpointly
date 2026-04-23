import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-slate-950 text-slate-300 font-sans antialiased overflow-x-hidden selection:bg-brand-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-brand-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            100% Free & Open Source
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Test APIs Together.<br />
            <span className="text-gradient">Without the Paywall.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A collaborative API client like Postman, but actually free. Build,
            test, and share API requests with your team in real-time. No limits,
            no credit card.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/login"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-xl shadow-brand-500/25 transition-all hover:-translate-y-0.5"
            >
              Start Testing Now
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
            >
              Explore Features
            </a>
          </div>

          {/* App Preview Mockup */}
          <div className="mt-20 mx-auto max-w-5xl glass-panel text-left overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 text-xs font-medium text-slate-500 flex-1 text-center font-mono">
                POST /api/v1/workspaces/invite
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="hidden md:block w-64 border-r border-slate-800 p-4 bg-slate-900/30">
                <div className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">
                  Collections
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-slate-800/50 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                    </svg>
                    Authentication
                  </div>
                  <div className="pl-6 py-1 text-sm text-slate-400 flex items-center gap-2 hover:text-white cursor-pointer">
                    <span className="text-[10px] font-bold text-green-400">POST</span>
                    Login
                  </div>
                  <div className="pl-6 py-1 text-sm text-slate-400 flex items-center gap-2 hover:text-white cursor-pointer">
                    <span className="text-[10px] font-bold text-brand-400">GET</span>
                    User Profile
                  </div>
                </div>
              </div>
              {/* Editor */}
              <div className="flex-1 p-6 font-mono text-sm leading-loose">
                <div className="flex items-center gap-3 mb-6 bg-slate-900 border border-slate-800 rounded-lg p-1">
                  <div className="px-3 py-1.5 bg-green-500/10 text-green-400 rounded-md font-bold text-xs">
                    POST
                  </div>
                  <div className="text-slate-300 flex-1">
                    https://api.endpointly.io/v1/workspaces/invite
                  </div>
                  <div className="px-4 py-1.5 bg-brand-600 text-white rounded-md font-sans font-medium text-xs cursor-pointer">
                    Send
                  </div>
                </div>
                <div className="text-slate-500 mb-2">// Request Body (JSON)</div>
                <div className="text-slate-300">
                  <span className="text-slate-400">{"{"}</span><br />
                  &nbsp;&nbsp;<span className="text-brand-300">"email"</span>:
                  <span className="text-emerald-300">"dev@example.com"</span>,<br />
                  &nbsp;&nbsp;<span className="text-brand-300">"role"</span>:
                  <span className="text-emerald-300">"editor"</span>,<br />
                  &nbsp;&nbsp;<span className="text-brand-300">"workspaceId"</span>:
                  <span className="text-emerald-300">"ws_9x8c7v"</span><br />
                  <span className="text-slate-400">{"}"}</span>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/50 relative">
                  <div className="absolute -top-3 left-4 bg-slate-900 px-2 text-xs font-semibold text-slate-500">
                    Response &bull;
                    <span className="text-green-400">200 OK</span> &bull; 42ms
                  </div>
                  <div className="text-slate-300">
                    <span className="text-slate-400">{"{"}</span><br />
                    &nbsp;&nbsp;<span className="text-brand-300">"success"</span>:
                    <span className="text-orange-300">true</span>,<br />
                    &nbsp;&nbsp;<span className="text-brand-300">"message"</span>:
                    <span className="text-emerald-300">"Invitation sent successfully."</span><br />
                    <span className="text-slate-400">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section id="features" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">
              Why Endpointly?
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Built for Teams, Free for Everyone.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 bg-brand-500/10 text-brand-400 rounded-xl flex items-center justify-center mb-6 text-2xl">
                🤝
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Real-time Collaboration
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Invite your team to workspaces. Share API requests, environments,
                and docs instantly without exporting/importing JSON files.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 text-2xl">
                ⚡
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Fast & Lightweight
              </h4>
              <p className="text-slate-400 leading-relaxed">
                No bulky electron apps. Run it locally or deploy it to your
                server. Fast execution and snappy interface built with modern
                tech.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center mb-6 text-2xl">
                🔐
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Auto Auth Tokens</h4>
              <p className="text-slate-400 leading-relaxed">
                Say goodbye to copy-pasting JWTs. Endpointly can automatically
                grab tokens from login requests and attach them to subsequent
                calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900/20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Ditch Expensive API Clients?
          </h2>
          <p className="text-xl text-brand-100/80 mb-10">
            Self-host Endpointly in minutes. Complete control over your data, zero
            subscription fees.
          </p>

          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
            <code className="text-brand-300 font-mono text-sm md:text-base">
              git clone https://github.com/endpointly.git
            </code>
            <a
              href="https://github.com"
              target="_blank"
              className="px-6 py-2.5 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              View Repository
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-center">
        <p className="text-slate-500 text-sm">
          &copy; 2026 Endpointly. Open Source under MIT License.<br />
          Built for developers who love clean tools.
        </p>
      </footer>
    </div>
  );
};

export default Home;

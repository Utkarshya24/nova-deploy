"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeaturesPage() {
  const tabs = ["Deployments", "Databases", "Observability", "Networking", "Security", "Collaboration"];
  const [activeTab, setActiveTab] = useState("Deployments");

  return (
    <div className="flex flex-col w-full bg-white relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 circuit-pattern pointer-events-none z-0"></div>
        
        <div className="relative z-10 bg-bg-blue-tint text-brand text-[13px] font-semibold px-4 py-1.5 rounded-full mb-6 border border-border-blue inline-flex">
          Platform
        </div>
        
        <h1 className="relative z-10 text-[52px] font-heading font-extrabold text-text-heading leading-[1.1] tracking-[-0.02em] mb-6">
          Every Feature You <span className="gradient-text">Need.</span>
        </h1>
        
        <p className="relative z-10 text-[18px] text-text-body max-w-[600px] mb-10 leading-[1.7]">
          Built from the ground up for developer productivity, team collaboration, and enterprise reliability.
        </p>
        
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="https://dash.dcdeploy.com" className="px-7 py-3 bg-[#fcb817] text-[#0F172A] font-semibold rounded-full shadow-[0_4px_14px_rgba(14,84,135,0.35)] hover:bg-[#e5a515] transition-colors text-center">
            Get Started Free &rarr;
          </Link>
          <Link href="/pricing" className="px-7 py-3 bg-white text-text-body border-[1.5px] border-border-default font-semibold rounded-full hover:border-brand hover:text-brand transition-colors">
            View Pricing
          </Link>
        </div>

        {/* Floating Previews */}
        <div className="relative z-10 w-full max-w-[800px] h-[100px] flex justify-center perspective-[1000px]">
           <div className="bg-white p-4 rounded-xl shadow-lg border border-border-default flex items-center gap-3 animate-[float_4s_ease-in-out_infinite] absolute z-[3] -translate-y-4">
             <div className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center text-white text-xs">🚀</div>
             <span className="font-semibold text-[14px]">v2.4.0 Deployed</span>
           </div>
           <div className="bg-white p-4 rounded-xl shadow-lg border border-border-default flex items-center gap-3 animate-[float_3.5s_ease-in-out_infinite] absolute -translate-x-[200px] top-6 z-[2]">
             <span className="font-semibold text-[14px] text-green-600">PostgreSQL</span>
             <span className="text-xs text-text-muted">Connected</span>
           </div>
           <div className="bg-white p-4 rounded-xl shadow-lg border border-border-default flex items-center gap-3 animate-[float_4.5s_ease-in-out_infinite] absolute translate-x-[200px] top-10 z-[1]">
             <span className="font-semibold text-[14px] text-brand">Edge Config</span>
             <span className="text-xs text-text-muted">Synced</span>
           </div>
        </div>
      </section>

      {/* STICKY SUB-NAV */}
      <div className="sticky top-[68px] z-40 w-full bg-white/80 backdrop-blur-md border-b border-border-default h-[64px] flex items-center justify-center px-4 overflow-x-auto hide-scrollbar">
        <nav className="flex gap-1 bg-[#F1F5F9] p-1 rounded-full">
          {tabs.map((item) => {
            const isActive = activeTab === item;
            return (
              <button 
                key={item} 
                onClick={() => setActiveTab(item)}
                className={`px-6 py-2 rounded-full font-bold text-[14px] whitespace-nowrap transition-all duration-200 ${
                  isActive 
                    ? "bg-white text-brand shadow-sm" 
                    : "text-text-muted hover:text-text-heading"
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div className="min-h-[600px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {activeTab === "Deployments" && (
              <section className="py-[96px] px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="bg-brand-pale text-brand px-3 py-1 text-[12px] font-bold rounded-full inline-block mb-6 uppercase tracking-wider">Deployments</div>
                    <h2 className="text-[40px] font-heading font-bold text-text-heading mb-6 leading-tight">
                      From git push to <span className="gradient-text">live</span> in seconds.
                    </h2>
                    <p className="text-[18px] text-text-body mb-8 leading-[1.7]">
                      Give your team the power to deploy code seamlessly. We handle the heavy lifting so you can focus on writing features.
                    </p>
                    <div className="flex flex-col gap-5 mb-8">
                      {[
                        { title: "Zero-config framework detection", desc: "Instantly supports Next.js, Nuxt, SvelteKit, and more." },
                        { title: "Real-time streaming build logs", desc: "Watch your build progress without refreshing." },
                        { title: "Pull request preview URLs", desc: "Share live preview environments for every PR." },
                        { title: "Atomic deploys with instant rollback", desc: "Go back to a previous version in 1 click." }
                      ].map((item, i) => (
                        <div key={i} className="flex flex-col">
                          <div className="flex items-center gap-3 mb-1">
                            <div className="w-5 h-5 rounded-full bg-bg-blue-tint text-brand flex items-center justify-center text-[10px] font-bold">&#10003;</div>
                            <span className="text-[15px] text-text-heading font-semibold">{item.title}</span>
                          </div>
                          <div className="pl-8 text-[14px] text-text-muted">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-[#0F172A] rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-[#1E293B] overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-[#1E293B]">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-[12px] font-mono text-slate-400">my-app — DCDeploy</div>
                        <div className="w-12"></div>
                      </div>
                      <div className="p-6 font-mono text-[13px] text-slate-300 leading-[1.8] min-h-[300px]">
                        <div className="text-slate-500 flex gap-4"><span>11:04</span> <span className="text-slate-300">Cloning repository from GitHub...</span></div>
                        <div className="text-slate-500 flex gap-4"><span>11:04</span> <span className="text-slate-300">Detected Next.js framework... setting up build env.</span></div>
                        <div className="text-slate-500 flex gap-4"><span>11:05</span> <span className="text-[#10B981]">✔ Running build script: npm run build</span></div>
                        <div className="text-slate-500 flex gap-4"><span>11:05</span> <span className="text-slate-300">Creating optimized production build...</span></div>
                        <div className="text-slate-500 flex gap-4"><span>11:05</span> <span className="text-[#10B981]">✔ Uploading assets to Edge Network...</span></div>
                        <div className="mt-4 border-l-2 border-[#10B981] pl-4 text-white">Successfully deployed!</div>
                        <div className="text-[#4da1db] mt-2 pl-4 break-words">https://my-app-prod.dcdeploy.app</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "Databases" && (
              <section className="py-[96px] px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="order-2 md:order-1">
                    <div className="flex flex-col gap-4 w-full max-w-[400px]">
                      <div className="bg-white rounded-2xl shadow-lg border border-border-default p-5 flex items-center justify-between hover:-translate-y-1 transition-transform">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl font-bold">PG</div>
                          <div>
                            <h4 className="font-bold text-text-heading text-[16px]">PostgreSQL 16</h4>
                            <span className="text-[12px] text-text-muted">Managed SQL • Backups</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl shadow-lg border border-border-default p-5 flex items-center justify-between ml-4 hover:-translate-y-1 transition-transform">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-xl font-bold">R</div>
                          <div>
                            <h4 className="font-bold text-text-heading text-[16px]">Redis 7</h4>
                            <span className="text-[12px] text-text-muted">In-Memory Caching</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="bg-brand-pale text-brand px-3 py-1 text-[12px] font-bold rounded-full inline-block mb-6 uppercase tracking-wider">Databases</div>
                    <h2 className="text-[40px] font-heading font-bold text-text-heading mb-6 leading-tight">Managed databases that <span className="gradient-text">just work.</span></h2>
                    <p className="text-[18px] text-text-body mb-8 leading-[1.7]">Provision production-ready databases with a single click. We handle backups, scaling, and high availability natively.</p>
                    <div className="flex flex-col gap-5">
                      {["Daily point-in-time backups", "One-click connection injection", "Isolated DB branches for PRs"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-bg-blue-tint text-brand flex items-center justify-center text-[10px] font-bold">&#10003;</div>
                          <span className="text-[15px] text-text-heading font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "Observability" && (
              <section className="py-[96px] px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                  <div className="w-full bg-white border border-border-default rounded-[24px] shadow-xl mb-16 overflow-hidden aspect-video relative">
                    <img 
                      src="/metrics.png" 
                      alt="Observability Metrics Dashboard" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-[32px] md:text-[40px] font-heading font-bold text-text-heading mb-6">Complete Observability</h2>
                    <p className="text-[18px] text-text-body mb-12">Monitor metrics, streaming logs, and custom alerts without third-party tools.</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {["Real-time logs", "Metric gauges", "Smart alerts", "Usage quotas"].map((f, i) => (
                        <div key={i} className="bg-bg-blue-tint text-brand font-bold p-4 rounded-xl text-[14px]">{f}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "Networking" && (
              <section className="py-[96px] px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="bg-brand-pale text-brand px-3 py-1 text-[12px] font-bold rounded-full inline-block mb-6 uppercase tracking-wider">Networking</div>
                    <h2 className="text-[40px] font-heading font-bold text-text-heading mb-6 leading-tight">Global Edge <span className="gradient-text">Acceleration.</span></h2>
                    <p className="text-[18px] text-text-body mb-8 leading-[1.7]">Deliver content at lightning speed with our global edge network. Automatic TLS, smart routing, and global CDN caching.</p>
                    <div className="grid grid-cols-1 gap-4">
                      {["35+ Global regions", "Automatic Managed TLS", "Smart L7 Load Balancing", "Custom Domain Support"].map((f, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <div className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold">✓</div>
                           <span className="text-[16px] font-semibold text-text-heading">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#F8FAFF] rounded-3xl p-10 border border-border-default relative overflow-hidden flex items-center justify-center min-h-[400px]">
                    <div className="absolute inset-0 circuit-pattern opacity-10"></div>
                    <div className="relative w-48 h-48 bg-brand/20 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-32 h-32 bg-brand/40 rounded-full flex items-center justify-center animate-ping absolute"></div>
                      <div className="w-24 h-24 bg-brand rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(14,84,135,0.5)] relative z-10">
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "Security" && (
              <section className="py-[96px] px-6 bg-white overflow-hidden text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-brand-pale text-brand px-3 py-1 text-[12px] font-bold rounded-full inline-block mb-6 uppercase tracking-wider">Security</div>
                  <h2 className="text-[40px] font-heading font-bold text-text-heading mb-6 leading-tight">Enterprise-Grade <span className="gradient-text">Protection.</span></h2>
                  <p className="text-[18px] text-text-body mb-16">Every application deployed on DCDeploy is protected by our multi-layered security architecture.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["SOC 2 Type II", "GDPR Compliant", "AES-256 Encryption", "TLS 1.3", "RBAC Control", "VPC Isolation", "Anti-DDoS", "Audit Logging"].map((s, i) => (
                      <div key={i} className="bg-white border border-border-default p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-2xl mb-3">🛡️</div>
                        <span className="text-[14px] font-bold text-text-heading">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {activeTab === "Collaboration" && (
              <section className="py-[96px] px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="bg-brand-pale text-brand px-3 py-1 text-[12px] font-bold rounded-full inline-block mb-6 uppercase tracking-wider">Collaboration</div>
                    <h2 className="text-[40px] font-heading font-bold text-text-heading mb-6 leading-tight">Built for <span className="gradient-text">Teams.</span></h2>
                    <p className="text-[18px] text-text-body max-w-2xl mx-auto">Seamlessly manage projects across your entire organization with powerful collaboration tools.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { title: "Team Organizations", desc: "Manage multiple projects under a single organization account." },
                      { title: "Role-Based Access", desc: "Assign Viewer, Developer, or Admin roles to team members." },
                      { title: "Project Sharing", desc: "Share direct links to preview environments and logs." }
                    ].map((item, i) => (
                      <div key={i} className="p-8 border border-border-default rounded-[32px] bg-bg-page hover:border-brand transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center mb-6 font-bold text-xl">{i+1}</div>
                        <h3 className="text-xl font-bold text-text-heading mb-3">{item.title}</h3>
                        <p className="text-text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-[#0F172A] text-white text-center">
        <h2 className="text-[36px] font-heading font-bold mb-6">Ready to experience these features?</h2>
        <Link href="https://dash.dcdeploy.com" className="bg-[#fcb817] text-[#0F172A] font-bold px-8 py-4 rounded-full hover:bg-[#e5a515] transition-all shadow-lg inline-block">Start Building Now</Link>
      </section>

    </div>
  );
}

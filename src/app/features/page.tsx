"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturesPage() {
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
          <button className="px-7 py-3 bg-brand text-white font-semibold rounded-full shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:bg-brand-hover transition-colors">
            Get Started Free &rarr;
          </button>
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
      <div className="sticky top-[68px] z-40 w-full bg-white/80 backdrop-blur-md border-b border-border-default h-[56px] flex items-center justify-center px-4 overflow-x-auto hide-scrollbar">
        <nav className="flex gap-2">
          {["Deployments", "Databases", "Observability", "Networking", "Security", "Collaboration"].map((item, i) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`px-4 py-2 font-medium text-[14px] whitespace-nowrap border-b-2 ${i === 0 ? "text-brand border-brand" : "text-text-muted border-transparent hover:text-brand"}`}>
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* DEPLOYMENTS SECTION */}
      <section id="deployments" className="py-[96px] px-6 bg-white overflow-hidden">
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
            
            <Link href="/docs" className="text-brand font-semibold text-[15px] hover:underline flex items-center gap-1">
              Read deployment docs &rarr;
            </Link>
          </div>

          <div className="relative">
            <div className="bg-[#0F172A] rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-[#1E293B] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-[#1E293B]">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[12px] font-mono text-slate-400">my-app — NovaDeploy</div>
                <div className="w-12"></div>
              </div>
              <div className="p-6 font-mono text-[13px] text-slate-300 leading-[1.8] min-h-[300px]">
                <div className="text-slate-500 flex gap-4"><span>11:04</span> <span className="text-slate-300">Cloning repository from GitHub...</span></div>
                <div className="text-slate-500 flex gap-4"><span>11:04</span> <span className="text-slate-300">Detected Next.js framework... setting up build env.</span></div>
                <div className="text-slate-500 flex gap-4"><span>11:05</span> <span className="text-[#10B981]">✔ Running build script: npm run build</span></div>
                <div className="text-slate-500 flex gap-4"><span>11:05</span> <span className="text-slate-300">Creating optimized production build...</span></div>
                <div className="text-slate-500 flex gap-4"><span>11:05</span> <span className="text-[#10B981]">✔ Uploading assets to Edge Network...</span></div>
                <div className="mt-4 border-l-2 border-[#10B981] pl-4 text-white">
                  Successfully deployed!
                </div>
                <div className="text-[#60A5FA] mt-2 pl-4 break-words">https://my-app-prod.novadeploy.app</div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-[#10B981] text-white px-4 py-2 rounded-full font-bold text-[13px] shadow-lg rotate-3 z-10">
              Deploy #487 — 23.4s
            </div>
          </div>
        </div>
      </section>

      {/* DATABASES SECTION */}
      <section id="databases" className="relative py-[96px] px-6 bg-bg-page overflow-hidden">
        <div className="absolute top-0 inset-x-0 -translate-y-[99%]">
          <svg viewBox="0 0 1440 120" className="w-full text-bg-page fill-current" preserveAspectRatio="none"><path d="M0,120 L1440,120 L1440,60 C1120,0 1020,120 720,60 C420,0 320,120 0,60 L0,120 Z"></path></svg>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-col-reverse md:flex-row">
          
          <div className="relative flex justify-center py-10">
            {/* Database Stack */}
            <div className="flex flex-col gap-4 relative w-full max-w-[400px]">
              
              <div className="bg-white rounded-2xl shadow-lg border border-border-default p-5 flex items-center justify-between z-[3] hover:-translate-y-1 transition-transform relative">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl font-bold">PG</div>
                  <div>
                    <h4 className="font-bold text-text-heading text-[16px]">PostgreSQL 16</h4>
                    <span className="text-[12px] text-text-muted">Full SQL • Extensions • Backups</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">Active</div>
                  <span className="text-[12px] font-semibold text-brand">$7/mo starting</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-border-default p-5 flex items-center justify-between z-[2] ml-4 hover:-translate-y-1 transition-transform relative">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-xl font-bold">R</div>
                  <div>
                    <h4 className="font-bold text-text-heading text-[16px]">Redis 7</h4>
                    <span className="text-[12px] text-text-muted">In-Memory • Caching • Pub/Sub</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">Active</div>
                  <span className="text-[12px] font-semibold text-brand">$5/mo starting</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-border-default p-5 flex items-center justify-between z-[1] ml-8 hover:-translate-y-1 transition-transform relative">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-xl font-bold">M</div>
                  <div>
                    <h4 className="font-bold text-text-heading text-[16px]">MySQL 8</h4>
                    <span className="text-[12px] text-text-muted">Relational • High Availability</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">Paused</div>
                  <span className="text-[12px] font-semibold text-brand">$7/mo starting</span>
                </div>
              </div>

              <p className="text-[13px] text-text-muted italic text-center mt-4">
                Connection strings auto-injected into env vars. Zero manual setup.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-brand-pale text-brand px-3 py-1 text-[12px] font-bold rounded-full inline-block mb-6 uppercase tracking-wider">Databases</div>
            <h2 className="text-[40px] font-heading font-bold text-text-heading mb-6 leading-tight">
              Managed databases that <span className="gradient-text">just work.</span>
            </h2>
            <p className="text-[18px] text-text-body mb-8 leading-[1.7]">
              Provision production-ready databases with a single click. We handle backups, scaling, and high availability natively.
            </p>
            
            <div className="flex flex-col gap-5 mb-8">
              {[
                { title: "Daily point-in-time backups", desc: "Never lose data with automated backups retained for 30 days." },
                { title: "One-click connection injection", desc: "Automatically set DATABASE_URL in your app environments." },
                { title: "Branching support", desc: "Spin up isolated DB branches for pull requests." },
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
          
        </div>
      </section>

      {/* OBSERVABILITY */}
      <section id="observability" className="py-[96px] px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
           {/* Visual */}
           <div className="w-full bg-white border border-border-default rounded-[20px] shadow-lg mb-16 overflow-hidden flex flex-col md:flex-row">
              {/* Chart Panel */}
              <div className="md:w-[40%] bg-[#F8FAFF] p-6 border-b md:border-b-0 md:border-r border-border-default flex flex-col">
                 <h4 className="text-[14px] font-semibold text-text-heading mb-4">Requests / min</h4>
                 <div className="flex-1 w-full h-[150px] relative">
                    <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full text-green-400 overflow-visible">
                      <path d="M0,45 Q10,20 20,40 T40,30 T60,10 T80,35 T100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="100" cy="5" r="3" fill="currentColor"></circle>
                    </svg>
                 </div>
              </div>
              
              {/* Gauges Panel */}
              <div className="md:w-[25%] bg-white p-6 border-b md:border-b-0 md:border-r border-border-default flex md:flex-col justify-center items-center gap-8">
                 <div className="flex flex-col items-center gap-2">
                   <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-brand border-r-brand rotate-45 flex items-center justify-center">
                     <span className="text-[14px] font-bold text-text-heading -rotate-45">34%</span>
                   </div>
                   <span className="text-[12px] font-semibold text-text-muted uppercase">CPU</span>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                   <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-teal-400 border-r-teal-400 border-b-teal-400 -rotate-12 flex items-center justify-center">
                     <span className="text-[14px] font-bold text-text-heading rotate-12">67%</span>
                   </div>
                   <span className="text-[12px] font-semibold text-text-muted uppercase">RAM</span>
                 </div>
              </div>

              {/* Logs Panel */}
              <div className="md:w-[35%] bg-[#0F172A] p-6 flex flex-col">
                 <div className="flex items-center justify-between mb-4">
                   <h4 className="text-[14px] font-semibold text-white">Live logs</h4>
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 </div>
                 <div className="flex-1 font-mono text-[11px] leading-relaxed text-slate-300">
                    <div className="flex gap-2"><span className="text-slate-500">GET</span> <span>/api/users</span> <span className="text-green-400">200</span></div>
                    <div className="flex gap-2"><span className="text-slate-500">POST</span> <span>/api/login</span> <span className="text-green-400">200</span></div>
                    <div className="flex gap-2"><span className="text-slate-500">GET</span> <span>/_next/static...</span> <span className="text-slate-400">304</span></div>
                    <div className="flex gap-2"><span className="text-slate-500">ERR</span> <span className="text-red-400">Worker timeout</span> <span className="text-red-400">500</span></div>
                 </div>
              </div>
           </div>

           <div className="max-w-3xl mx-auto text-center">
             <h2 className="text-[32px] md:text-[40px] font-heading font-bold text-text-heading mb-6">Complete Observability</h2>
             <p className="text-[18px] text-text-body mb-12">Monitor your applications with built-in metrics, live streaming logs, and custom alerts. Never be in the dark about production issues.</p>
             
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
               {["Streaming logs", "Custom metrics", "Smart alerts", "30-day history"].map((feature, i) => (
                 <div key={i} className="bg-bg-blue-tint text-brand font-semibold text-[14px] p-4 rounded-xl flex items-center justify-center text-center">
                   {feature}
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="py-[96px] px-6 bg-bg-page">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-brand-pale text-brand px-3 py-1 text-[12px] font-bold rounded-full inline-block mb-6 uppercase tracking-wider">Security First</div>
          <h2 className="text-[32px] md:text-[40px] font-heading font-bold text-text-heading mb-6">Enterprise-Grade Security</h2>
          <p className="text-[18px] text-text-body max-w-2xl mx-auto mb-16">Security isn't an afterthought. It's built into every layer of our platform.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
             {[
               "SOC 2 Type II", "ISO 27001", "GDPR Compliant", "HIPAA-Ready",
               "AES-256-GCM", "TLS 1.3", "Zero-trust architecture", "Strict RBAC"
             ].map((badge) => (
               <div key={badge} className="bg-white border border-border-blue rounded-xl p-5 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-8 h-8 rounded-full bg-bg-blue-tint flex items-center justify-center text-brand font-bold">🔒</div>
                 <span className="text-[14px] font-semibold text-text-heading text-center">{badge}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="collaboration" className="py-[120px] px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-heading font-bold text-text-heading mb-4">Connects With Your Entire Stack.</h2>
            <p className="text-[18px] text-text-body">100+ integrations out of the box.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
             {[
               {name: "GitHub", cat: "CI/CD"}, {name: "GitLab", cat: "CI/CD"}, {name: "Bitbucket", cat: "CI/CD"}, {name: "Jenkins", cat: "CI/CD"}, {name: "CircleCI", cat: "CI/CD"},
               {name: "Datadog", cat: "Monitoring"}, {name: "Grafana", cat: "Monitoring"}, {name: "New Relic", cat: "Monitoring"}, {name: "Sentry", cat: "Monitoring"}, {name: "PagerDuty", cat: "Monitoring"},
               {name: "Slack", cat: "Comms"}, {name: "Discord", cat: "Comms"}, {name: "Teams", cat: "Comms"}, {name: "Email", cat: "Comms"}, {name: "Webhooks", cat: "Comms"},
               {name: "Auth0", cat: "Auth"}, {name: "Clerk", cat: "Auth"}, {name: "Supabase", cat: "Auth"}, {name: "Firebase", cat: "Auth"}, {name: "Okta", cat: "Auth"}
             ].map((integration, i) => (
               <div key={i} className="bg-white border border-border-default rounded-xl p-6 flex flex-col justify-center items-center gap-3 hover:border-border-blue hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] transition-all group cursor-pointer">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg group-hover:bg-bg-blue-tint group-hover:text-brand transition-colors flex items-center justify-center font-bold text-slate-400 text-[10px]">
                     IMG
                  </div>
                  <span className="text-[14px] font-semibold text-text-muted group-hover:text-text-heading">{integration.name}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}

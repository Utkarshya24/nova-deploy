"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Deploy");

  const tabs = ["Deploy", "Observe", "Scale", "Collaborate", "Secure"];

  return (
    <div className="flex flex-col w-full bg-white relative overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex flex-col items-center pt-32 pb-24 px-6 overflow-hidden bg-white">
        {/* Background Patterns */}
        <div className="absolute inset-0 circuit-pattern pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-[300px] perspective-grid pointer-events-none"></div>

        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 flex items-center gap-2 bg-bg-blue-tint border border-border-blue text-brand rounded-full px-4 py-1.5 text-[13px] font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          Smart Deployment Made Simple
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative z-10 text-center max-w-3xl mb-6"
        >
          <h1 className="text-[52px] md:text-[64px] font-heading font-extrabold text-text-heading leading-[1.05] tracking-[-0.025em]">
            Revolutionizing Your <br />
            Deployments with <br />
            <span className="gradient-text">Scalable Technology</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 text-center text-[18px] text-text-body max-w-[500px] mb-10 leading-relaxed"
        >
          Empowering you with next-gen cloud solutions. Deploy any stack in under 3 minutes, anywhere in the world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <Link href="/contact" className="px-7 py-3 bg-brand text-white text-[15px] font-semibold rounded-full shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:bg-brand-hover hover:scale-[1.02] transition-all">
            Get In Touch &rarr;
          </Link>
          <Link href="/features" className="px-7 py-3 bg-white text-text-body border-[1.5px] border-border-default text-[15px] font-semibold rounded-full hover:border-brand hover:text-brand transition-colors">
            Learn More &rarr;
          </Link>
        </motion.div>

        {/* 3D Isometric Floating Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="relative z-10 w-full max-w-[800px] mt-8 flex justify-center perspective-[1000px]"
        >
          {/* Cloud Blobs behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-bg-blue-tint rounded-[100%] blur-[80px] -z-10 opacity-70"></div>

          {/* Main 3D Shape Mockup */}
          <div className="relative w-[300px] h-[340px] animate-[float_4s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateZ(-15deg)' }}>
             {/* Base */}
             <div className="absolute bottom-0 w-full h-[60px] bg-[#1E293B] rounded-xl shadow-2xl" style={{ transform: 'translateZ(0px)' }}></div>
             {/* Mid Layer */}
             <div className="absolute bottom-[40px] w-full h-[180px] bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-xl opacity-90 backdrop-blur" style={{ transform: 'translateZ(40px)' }}></div>
             {/* Top Layer */}
             <div className="absolute bottom-[200px] w-full h-[100px] bg-gradient-to-br from-[#2563EB] to-[#1E40AF] rounded-xl shadow-[0_20px_50px_rgba(37,99,235,0.4)]" style={{ transform: 'translateZ(80px)' }}>
                <div className="w-full h-full flex flex-col justify-center items-center gap-3">
                   <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                   <div className="w-24 h-2 bg-white/20 rounded-full"></div>
                   <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                </div>
             </div>
          </div>

          {/* Floating Accessory Cards Element */}
          <div className="absolute top-[10%] -left-[5%] bg-white p-3 rounded-xl shadow-[0_8px_32px_rgba(37,99,235,0.15)] animate-[float_3s_ease-in-out_infinite] flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <div className="flex flex-col">
               <span className="text-[13px] font-semibold text-green-600">&#10003; Deploy successful</span>
               <span className="text-[11px] text-text-muted">my-saas-app • 23s ago</span>
             </div>
          </div>

          <div className="absolute top-[20%] -right-[5%] bg-white p-4 rounded-xl shadow-[0_8px_32px_rgba(37,99,235,0.15)] animate-[float_3.5s_ease-in-out_infinite] flex flex-col gap-2">
             <span className="text-[13px] font-semibold text-brand">Performance • 42%</span>
             <div className="flex items-end gap-1 h-8">
                <div className="w-3 bg-brand-light rounded-t-sm h-[40%]"></div>
                <div className="w-3 bg-brand rounded-t-sm h-[70%]"></div>
                <div className="w-3 bg-[#60A5FA] rounded-t-sm h-[100%]"></div>
             </div>
          </div>

          <div className="absolute bottom-[20%] -left-[10%] bg-white py-2 px-4 rounded-xl shadow-[0_8px_32px_rgba(37,99,235,0.15)] animate-[float_4s_ease-in-out_infinite] flex items-center gap-2">
             <div className="w-5 h-5 bg-brand-pale rounded-full flex items-center justify-center text-brand text-[10px]">🌍</div>
             <span className="text-[13px] font-semibold text-text-heading">35 Regions</span>
          </div>

          <div className="absolute bottom-[10%] -right-[15%] bg-white py-2 px-4 rounded-xl shadow-[0_8px_32px_rgba(37,99,235,0.15)] animate-[float_4.5s_ease-in-out_infinite] flex items-center gap-2">
             <span className="text-[13px] font-semibold text-text-heading">99.99% Uptime</span>
             <span className="text-green-500 font-bold">&#10003;</span>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: LOGOS */}
      <section className="bg-white border-t border-[#F1F5F9] py-12 px-6">
        <p className="text-center text-[14px] text-text-light tracking-[0.05em] uppercase mb-8">
          Trusted By 14K+ Companies Worldwide
        </p>
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="flex items-center gap-16 justify-center flex-wrap opacity-40 grayscale">
            {/* Mock Logos */}
            {[1, 2, 3, 4, 5].map((item) => (
              <h3 key={item} className="text-2xl font-bold text-slate-400">Logoipsum</h3>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section className="relative bg-bg-page pt-24 pb-32 px-6">
        {/* Top Cloud Blob SVG Divider */}
        <div className="absolute top-0 inset-x-0 -translate-y-[99%]">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-bg-page fill-current" preserveAspectRatio="none">
            <path d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="bg-brand-pale text-brand text-[13px] font-semibold px-4 py-1.5 rounded-full mb-4 inline-block">
              Quickly Deploy, Easily Track
            </div>
            <h2 className="text-[40px] font-heading font-bold text-text-heading">Deploy Smarter, Work Better</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Steps */}
            <div className="flex flex-col gap-6">
              {[
                { num: "01", title: "Connect Your Repositories", body: "Link GitHub, GitLab, or Bitbucket. We sync instantly.", active: false },
                { num: "02", title: "Add Your Configuration", body: "Set environment variables and build commands. Or let us auto-detect — we support 40+ frameworks.", active: true },
                { num: "03", title: "Connect Your Services", body: "Add databases, Redis, and third-party integrations in one click. No YAML required.", active: false },
                { num: "04", title: "Share Your Deploy Link", body: "Get a live URL the moment your build completes. Share previews with your team instantly.", active: false },
              ].map((step) => (
                <div key={step.num} className={`p-5 flex gap-4 ${step.active ? 'bg-bg-blue-tint border-l-[3px] border-l-brand rounded-r-xl rounded-b-xl rounded-t-xl' : 'border-l-[3px] border-l-transparent'}`}>
                  <div className="w-8 h-8 shrink-0 bg-brand text-white rounded-full flex items-center justify-center font-bold text-[14px]">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-text-heading mb-1">{step.title}</h3>
                    <p className="text-[14px] text-text-muted leading-[1.6]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Mockup */}
            <div className="relative">
              <div className="bg-white border border-border-default rounded-[20px] shadow-[0_4px_24px_rgba(37,99,235,0.08)] overflow-hidden">
                {/* Header */}
                <div className="flex items-center px-4 py-3 border-b border-border-default bg-slate-50">
                   <div className="flex gap-1.5 mr-4">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                   </div>
                   <div className="text-[12px] font-semibold text-text-muted mx-auto">NovaDeploy Dashboard</div>
                   <div className="w-10"></div> {/* Spacer balance */}
                </div>
                {/* Body */}
                <div className="flex h-[320px]">
                   <div className="w-16 border-r border-border-default bg-slate-50 flex flex-col items-center py-4 gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-light/30"></div>
                      <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                      <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                   </div>
                   <div className="flex-1 p-6 relative bg-white">
                      <div className="flex items-center gap-3 mb-6">
                        <h3 className="text-[18px] font-bold text-text-heading">my-saas-app</h3>
                        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Live</span>
                      </div>
                      
                      {/* Process Steps Bar */}
                      <div className="flex items-center gap-2 mb-8">
                         <div className="flex items-center gap-1 text-[12px] font-semibold text-brand">Build</div>
                         <div className="flex-1 h-px bg-brand"></div>
                         <div className="flex items-center gap-1 text-[12px] font-semibold text-brand">Test</div>
                         <div className="flex-1 h-px bg-brand"></div>
                         <div className="flex items-center gap-1 text-[12px] font-semibold text-brand">Deploy</div>
                         <div className="flex-1 h-px bg-border-default"></div>
                         <div className="flex items-center gap-1 text-[12px] font-semibold text-text-muted">Live</div>
                      </div>

                      {/* Log Area */}
                      <div className="bg-[#0F172A] rounded-xl p-4 text-[11px] font-mono text-slate-300 leading-relaxed mb-4">
                         <div className="text-slate-500">10:42:01 AM: <span className="text-slate-300">Cloning repository...</span></div>
                         <div className="text-slate-500">10:42:05 AM: <span className="text-slate-300">Running build command "npm run build"</span></div>
                         <div className="text-slate-500">10:42:18 AM: <span className="text-green-400">Build completed successfully</span></div>
                         <div className="text-slate-500">10:42:23 AM: <span className="text-[#60A5FA]">https://my-saas-app.novadeploy.app</span></div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-[13px] font-semibold text-green-700 flex items-center justify-center">
                         &#10003; Deployed in 31s
                      </div>
                   </div>
                </div>
              </div>

              {/* Floating Element 1 */}
              <div className="absolute -top-6 -right-6 bg-white border border-border-default rounded-xl shadow-lg p-3 flexItems-center gap-3 animate-[float_4s_ease-in-out_infinite]">
                 <div className="w-8 h-8 rounded-full bg-brand-pale flex items-center justify-center text-brand">📄</div>
                 <span className="text-[13px] font-semibold text-text-heading">Upload Your Project</span>
              </div>
              
              {/* Floating Element 2 */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-border-default rounded-xl shadow-lg p-3 flexItems-center gap-3 animate-[float_3.5s_ease-in-out_infinite]">
                 <div className="w-8 h-8 rounded-full bg-brand-pale flex items-center justify-center text-brand">📅</div>
                 <div className="flex flex-col">
                   <span className="text-[13px] font-semibold text-text-heading">Schedule</span>
                   <span className="text-[11px] text-brand font-medium">Auto-deploy</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE FEATURES BENTO GRID */}
      <section className="bg-white py-[100px] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-heading font-bold text-text-heading mb-4">Everything You Need to Ship</h2>
            <p className="text-[16px] text-text-body">Built for developers who value speed, simplicity, and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
            {/* Big Card Left */}
            <div className="md:col-span-1 md:row-span-2 relative bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] rounded-[20px] p-8 overflow-hidden flex flex-col justify-between text-white shadow-[0_8px_32px_rgba(37,99,235,0.25)] hover:-translate-y-1 transition-transform">
               <div>
                 <div className="w-12 h-12 mb-6 text-white opacity-90">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 16 4-4 4 4"/></svg>
                 </div>
                 <h3 className="text-[24px] font-heading font-bold mb-3">Zero-Config Deployments</h3>
                 <p className="text-[15px] opacity-80 leading-relaxed">Push code and go live in seconds. Auto-detection for 40+ frameworks.</p>
               </div>
               <div className="relative z-10 font-mono text-[14px] flex items-center gap-2 mt-8">
                 <span className="text-amber-300">⚡</span> 23s avg deploy time
               </div>
               {/* Pattern overlay */}
               <div className="absolute inset-0 circuit-pattern opacity-[0.1] -z-0"></div>
            </div>

            {/* Top Right */}
            <div className="md:col-span-1 md:row-span-1 bg-white border border-border-default rounded-2xl p-6 shadow-[0_4px_24px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-transform flex flex-col justify-center relative overflow-hidden">
               <h3 className="text-[20px] font-heading font-semibold text-text-heading mb-2">Global Edge Network</h3>
               <p className="text-[14px] text-text-muted">35+ regions. Your app, closer to your users.</p>
               <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 text-brand">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/></svg>
               </div>
            </div>

            {/* Middle Right */}
            <div className="md:col-span-1 md:row-span-1 bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-6 shadow-[0_4px_24px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-transform flex flex-col justify-center">
               <div className="text-[42px] font-heading font-extrabold text-brand mb-1 leading-none">99.99%</div>
               <h3 className="text-[14px] font-semibold text-text-muted mb-4">Guaranteed uptime SLA</h3>
               <div className="flex gap-1.5">
                 {[1,2,3,4,5,6,7,8,9,10,11].map(i => <div key={i} className="w-2.5 h-6 rounded-sm bg-green-400"></div>)}
                 <div className="w-2.5 h-6 rounded-sm bg-amber-400"></div>
               </div>
            </div>

            {/* Bottom Left Small */}
            <div className="md:col-span-1 md:row-span-1 bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-6 shadow-[0_4px_24px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-transform flex flex-col justify-center">
               <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-[18px] mb-4">$</div>
               <h3 className="text-[18px] font-heading font-semibold text-amber-900 mb-2">Transparent Pricing</h3>
               <p className="text-[14px] text-amber-700/80">Real-time cost meter. No surprise bills.</p>
            </div>

            {/* Bottom Right Wide */}
            <div className="md:col-span-2 md:row-span-1 bg-white border border-border-default rounded-2xl p-6 shadow-[0_4px_24px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-transform flex flex-col sm:flex-row items-center justify-between gap-6">
               <div className="flex-1">
                 <div className="w-10 h-10 rounded-full bg-brand-pale text-brand flex items-center justify-center mb-4">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                 </div>
                 <h3 className="text-[20px] font-heading font-semibold text-text-heading mb-2">Team Collaboration</h3>
                 <p className="text-[14px] text-text-muted">Invite unlimited developers with role-based access.</p>
               </div>
               <div className="flex -space-x-3">
                 <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-400 flex items-center justify-center text-white text-[12px] font-bold z-[4]">JD</div>
                 <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-400 flex items-center justify-center text-white text-[12px] font-bold z-[3]">AM</div>
                 <div className="w-12 h-12 rounded-full border-2 border-white bg-green-400 flex items-center justify-center text-white text-[12px] font-bold z-[2]">CH</div>
                 <div className="w-12 h-12 rounded-full border-2 border-white bg-brand-pale border-dashed flex items-center justify-center text-brand text-[18px] font-bold z-[1]">+</div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURE TABS */}
      <section className="relative bg-bg-page pt-24 pb-32 px-6">
        <div className="absolute top-0 inset-x-0 -translate-y-[99%]">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-bg-page fill-current" preserveAspectRatio="none">
            <path d="M0,60 C320,0 420,120 720,60 C1020,0 1120,120 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="bg-brand-pale text-brand text-[13px] font-semibold px-4 py-1.5 rounded-full mb-6">Platform Features</div>
          <h2 className="text-[32px] md:text-[40px] font-heading font-bold text-text-heading text-center mb-12">The Details That Make The Difference.</h2>

          {/* Tabs Container */}
          <div className="flex flex-wrap justify-center items-center bg-border-default rounded-full p-1 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all ${activeTab === tab ? "bg-white text-brand shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "text-text-muted hover:text-text-heading"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full min-h-[400px]">
            {/* Left Checklist */}
            <div className="flex flex-col gap-6">
              {[
                "Auto-detect 40+ frameworks",
                "Live streaming build logs",
                "Preview URLs for every pull request",
                "One-click instant rollback"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-pale flex items-center justify-center text-brand text-[12px] font-bold">&#10003;</div>
                  <span className="text-[16px] text-text-heading font-medium">{item}</span>
                </div>
              ))}
              <Link href="/docs" className="text-brand font-semibold text-[15px] mt-4 hover:underline">
                Read deploy docs &rarr;
              </Link>
            </div>

            {/* Right Terminal */}
            <div className="w-full bg-[#0F172A] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden border border-[#1E293B]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E293B] bg-[#0F172A]">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 <div className="text-[#475569] text-[12px] font-mono ml-4">Terminal ~ deployment</div>
              </div>
              <div className="p-6 font-mono text-[13px] leading-loose text-slate-300">
                <div className="text-brand-light">$ nova deploy --prod</div>
                <div className="text-slate-400">› Preparing build environment...</div>
                <div className="text-slate-400">› Installing dependencies (npm)... <span className="text-green-400 px-2 rounded bg-green-400/10 inline-block ml-2">1.2s</span></div>
                <div className="text-slate-400">› Building static assets...</div>
                <div className="text-green-400 mt-2 font-semibold">✔ Build successful (4.3s)</div>
                <div className="text-[#60A5FA] mt-4 font-bold border-l-2 border-[#60A5FA] pl-3 py-1">https://my-saas-app.novadeploy.app</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF */}
      <section className="bg-white py-[96px] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-heading font-bold text-text-heading mb-4">Join Thousands of Satisfied Users</h2>
            <p className="text-[16px] text-text-body">Developers worldwide trust NovaDeploy to ship faster.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { text: "Migrated from Heroku in 90 minutes. Cut our infra costs by 60%. The real-time logs alone justified the switch.", author: "Aditya R.", role: "CTO @ TechFlow", bg: "bg-blue-500" },
              { text: "Finally a platform that actually works for non-DevOps people. My whole team deployed confidently on day one.", author: "Sarah M.", role: "Product Engineer @ Shipfast", bg: "bg-purple-500" },
              { text: "The rollback button saved us at 2am during a production incident. One click. Back to working. We'll never leave.", author: "James L.", role: "SRE @ Nexus Labs", bg: "bg-green-500" },
              { text: "Pricing is completely transparent. I've never once been surprised by a bill in 14 months. That trust is priceless.", author: "Priya K.", role: "Indie Founder", bg: "bg-amber-500" },
              { text: "80+ services across 3 teams. The RBAC and org hierarchy is exactly what enterprise teams need from day one.", author: "Marcus T.", role: "VP Engineering @ Scalr", bg: "bg-indigo-500" },
              { text: "Deploys that took 8 minutes on our old CI now take 42 seconds. The speed improvement is genuinely shocking.", author: "Fatima A.", role: "Backend Engineer", bg: "bg-pink-500" },
              { text: "Docs are actually good. Set up Postgres, Redis, and a custom domain in under 15 minutes from zero.", author: "Leo W.", role: "Junior Developer", bg: "bg-blue-400" },
              { text: "The live cost meter in the UI changed how our team thinks about infrastructure spend. A total game changer.", author: "Ana B.", role: "Startup CTO", bg: "bg-teal-500" }
            ].map((quote, i) => (
              <div key={i} className="break-inside-avoid bg-white border border-border-default rounded-2xl p-6 shadow-sm hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all">
                <div className="flex gap-1 mb-4 text-[#FBBF24] text-[18px]">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-[15px] text-text-body font-body leading-[1.7] italic mb-6">"{quote.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[14px] ${quote.bg}`}>
                    {quote.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-text-heading">{quote.author}</span>
                    <span className="text-[13px] text-text-muted">{quote.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: STATS ROW */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#3B82F6] rounded-[24px] py-[80px] shadow-[0_8px_32px_rgba(37,99,235,0.25)] relative overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-[0.1] -z-0"></div>
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/20 relative z-10 w-full px-12">
            {[
              { num: "2.4M+", label: "Deployments", desc: "per month" },
              { num: "35", label: "Global regions", desc: "edge nodes" },
              { num: "99.99%", label: "Uptime SLA", desc: "guaranteed" },
              { num: "<3 min", label: "Avg deploy", desc: "start to live" }
            ].map((stat, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-center py-6 md:py-0 text-center">
                <div className="text-[40px] md:text-[52px] font-heading font-extrabold text-white mb-2">{stat.num}</div>
                <div className="text-[16px] text-white/75 font-medium">{stat.label}</div>
                <div className="text-[13px] text-white/50">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: BLOG TEASER */}
      <section className="relative bg-bg-page pt-24 pb-32 px-6">
        <div className="absolute top-0 inset-x-0 -translate-y-[99%]">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-bg-page fill-current" preserveAspectRatio="none">
            <path d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60 L1440,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="text-[36px] font-heading font-bold text-text-heading">Read Our Latest Blog Posts</h2>
            <Link href="/blog" className="px-5 py-2 bg-brand text-white rounded-full text-[14px] font-semibold mt-4 md:mt-0 hover:bg-brand-hover hover:scale-[1.02] transition-all">
              Read All Articles &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Deploy Next.js 14 to production in 3 clicks", bg: "bg-gradient-to-br from-blue-100 to-blue-200", badge: "TUTORIAL", time: "5 min" },
              { title: "How we cut deploy times by 40% with Nixpacks", bg: "bg-gradient-to-br from-green-100 to-green-200", badge: "ENGINEERING", time: "8 min" },
              { title: "NovaDeploy vs Railway vs Render: honest 2026 comparison", bg: "bg-gradient-to-br from-amber-100 to-amber-200", badge: "GUIDE", time: "12 min" },
            ].map((post, i) => (
              <div key={i} className="bg-white border border-border-default rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)] transition-all flex flex-col group">
                 <div className={`h-[200px] w-full ${post.bg} p-6 flex items-start relative`}>
                   <div className="bg-white/80 backdrop-blur text-text-heading text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{post.badge}</div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-[16px] font-semibold text-text-heading leading-snug mb-3 group-hover:text-brand transition-colors">{post.title}</h3>
                   <p className="text-[14px] text-text-muted mb-6 flex-1">Learn how to configure your application correctly and streamline your deployment workflows.</p>
                   <div className="flex items-center justify-between border-t border-border-default pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                        <span className="text-[12px] text-text-muted font-medium">Alex C. • {post.time} read</span>
                      </div>
                      <Link href={`/blog/post-${i}`} className="text-brand text-[13px] font-semibold hover:underline">
                        Read Now &rarr;
                      </Link>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA BANNER */}
      <section className="bg-white py-[80px] px-6">
        <div className="max-w-5xl mx-auto rounded-[28px] overflow-hidden flex flex-col md:flex-row shadow-[0_8px_40px_rgba(37,99,235,0.15)]">
          {/* Left Half */}
          <div className="md:w-[60%] bg-gradient-to-br from-[#2563EB] to-[#1E40AF] p-12 md:p-16 relative">
            <h2 className="text-[36px] font-heading font-bold text-white mb-4 leading-tight">Transform Way<br />You Deploy</h2>
            <p className="text-[16px] text-white/85 mb-8 max-w-sm">Connect your repo and go live in minutes. No credit card required.</p>
            <div className="flex rounded-xl overflow-hidden shadow-lg max-w-sm">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none backdrop-blur-sm" />
              <button className="bg-white text-brand font-bold px-6 py-3 hover:bg-slate-50 transition-colors">Start Free &rarr;</button>
            </div>
            {/* Floaters inside CTA */}
            <div className="hidden lg:flex absolute top-12 right-12 w-12 h-12 bg-white rounded-xl shadow-lg items-center justify-center text-brand text-xl font-bold rotate-12">🚀</div>
          </div>
          {/* Right Half */}
          <div className="md:w-[40%] bg-bg-blue-tint p-12 md:p-16 flex items-center justify-center relative overflow-hidden">
             <div className="w-full h-[200px] bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center gap-3 p-6 -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl font-bold mb-2">✓</div>
                <div className="text-xl font-bold text-text-heading">Deploy successful</div>
                <div className="w-24 h-2 bg-slate-200 rounded-full"></div>
             </div>
             {/* Cloud Blob */}
             <div className="absolute inset-0 bg-[#DBEAFE] blur-[50px] opacity-50 rounded-full scale-150 -z-0"></div>
          </div>
        </div>
      </section>

    </div>
  );
}

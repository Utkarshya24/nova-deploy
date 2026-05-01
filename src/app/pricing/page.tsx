"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Calculator State
  const [services, setServices] = useState(3);
  const [ram, setRam] = useState(1); // GB
  const [requests, setRequests] = useState(50000);
  const [databases, setDatabases] = useState(1);
  const [team, setTeam] = useState(3);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const calculateCost = () => {
    let cost = 0;
    if (services > 2) cost += (services - 2) * 5;
    if (ram > 0.5) cost += (services) * (ram - 0.5) * 10;
    if (requests > 100000) cost += ((requests - 100000) / 10000) * 0.5;
    if (databases > 0) cost += databases * 10;
    if (team > 1) cost += (team - 1) * 15;
    
    // Pro base
    if (cost > 0 && cost < 20) cost = 20; 
    
    return Math.max(0, Math.round(cost));
  };

  const estimatedCost = calculateCost();
  const recommendedPlan = estimatedCost === 0 ? "Hobby" : estimatedCost > 150 ? "Scale" : "Pro";

  const faqs = [
    "Is the free tier really free forever?",
    "What exactly counts as a \"service\"?",
    "How does usage-based billing work?",
    "Can I set a hard spending limit?",
    "Do you offer student or open source discounts?",
    "What payment methods do you accept?",
    "Can I switch between plans anytime?",
    "Do you offer refunds?",
    "Is there a discount for annual billing?",
    "How does team billing work?"
  ];

  return (
    <div className="flex flex-col w-full bg-white relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 circuit-pattern pointer-events-none z-0"></div>
        
        <h1 className="relative z-10 text-[52px] font-heading font-extrabold text-text-heading leading-[1.1] tracking-[-0.02em] mb-4">
          Simple Pricing.<br />
          No <span className="gradient-text">Surprises.</span>
        </h1>
        
        <p className="relative z-10 text-[18px] text-text-body max-w-[600px] mb-10">
          Start free. Scale as you grow. Cancel anytime.
        </p>

        {/* Toggle Pill */}
        <div className="relative z-10 bg-[#F1F5F9] border border-border-default rounded-full p-1 inline-flex items-center">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-[15px] font-semibold transition-all ${!isAnnual ? "bg-white shadow-sm text-text-heading" : "text-text-muted hover:text-text-heading"}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-[15px] font-semibold transition-all flex items-center gap-2 ${isAnnual ? "bg-white shadow-sm text-text-heading" : "text-text-muted hover:text-text-heading"}`}
          >
            Annual
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${isAnnual ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-text-muted'}`}>Save 20%</span>
          </button>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="relative px-6 pb-24 max-w-[1100px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* HOBBY CARD */}
          <div className="bg-white border border-border-default rounded-2xl p-8 flex flex-col h-full hover:shadow-[0_8px_40px_rgba(14,84,135,0.08)] transition-shadow">
            <div className="bg-slate-100 text-text-muted text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-flex w-max mb-6">Free Forever</div>
            <h3 className="text-[20px] font-heading font-semibold text-text-heading mb-4">Hobby</h3>
            <div className="mb-2 flex items-end gap-2">
              <span className="text-[64px] font-heading font-extrabold text-text-heading leading-none">$0</span>
              <span className="text-[18px] text-text-muted mb-2">/month</span>
            </div>
            <p className="text-[14px] text-text-muted mb-8">Perfect for side projects</p>
            
            <div className="w-full border-t border-dashed border-border-default mb-8"></div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-1">
              {[
                "2 services", "512MB RAM per service", "1GB storage", "Shared CPU", 
                "Custom domains", "Auto HTTPS/SSL", "Community support", "100GB bandwidth"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-bg-blue-tint text-brand flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">&#10003;</div>
                  <span className="text-[14px] text-text-body">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 rounded-full border border-border-default font-semibold text-[15px] hover:border-brand hover:text-brand transition-colors">
              Get Started Free
            </button>
          </div>

          {/* PRO CARD - FEATURED */}
          <div className="bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE] border-2 border-brand rounded-2xl p-8 flex flex-col h-[105%] shadow-[0_0_0_4px_#BFDBFE,0_20px_60px_rgba(14,84,135,0.15)] relative scale-100 md:scale-[1.04] md:-translate-y-2 z-10">
            <div className="bg-brand text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-flex w-max mb-6">Most Popular</div>
            <h3 className="text-[20px] font-heading font-semibold text-text-heading mb-4">Pro</h3>
            <div className="mb-2 flex flex-col items-start gap-1">
              <div className="flex items-end gap-2">
                <span className="text-[64px] font-heading font-extrabold gradient-text leading-none">{isAnnual ? "$16" : "$20"}</span>
                <span className="text-[18px] text-text-muted mb-2">/month</span>
              </div>
              {isAnnual && <div className="text-[13px] font-semibold text-green-600 line-through decoration-slate-400 mr-2">$24<span className="no-underline ml-1 text-green-600">$192 billed annually</span></div>}
            </div>
            <p className="text-[14px] text-text-muted mb-8">For serious projects and small teams</p>
            
            <div className="w-full border-t border-brand/20 mb-8"></div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-1">
              {[
                "Unlimited services", "2GB RAM per service", "50GB storage", "Dedicated CPU", 
                "Custom domains + wildcard SSL", "Managed Postgres + Redis", "Preview deploy URLs", 
                "Team collaboration (5 members)", "Priority email support", "1TB bandwidth"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">&#10003;</div>
                  <span className="text-[14px] text-text-heading font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 rounded-full bg-brand text-white font-semibold text-[15px] shadow-[0_8px_24px_rgba(14,84,135,0.3)] hover:bg-brand-hover hover:scale-[1.02] transition-all">
              Start with Pro &rarr;
            </button>
          </div>

          {/* SCALE CARD */}
          <div className="bg-white border border-border-default rounded-2xl p-8 flex flex-col h-full hover:shadow-[0_8px_40px_rgba(14,84,135,0.08)] transition-shadow">
            <div className="bg-[#0F172A] text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-flex w-max mb-6">Enterprise</div>
            <h3 className="text-[20px] font-heading font-semibold text-text-heading mb-4">Scale</h3>
            <div className="mb-2 flex items-end gap-2 h-[72px]">
              <span className="text-[48px] font-heading font-extrabold text-text-heading leading-tight">Custom</span>
            </div>
            <p className="text-[14px] text-text-muted mb-8">For teams that need everything</p>
            
            <div className="w-full border-t border-dashed border-border-default mb-8"></div>
            
            <ul className="flex flex-col gap-4 mb-10 flex-1">
              {[
                "Everything in Pro", "Unlimited team members", "SAML SSO + SCIM", "Dedicated infrastructure", 
                "SOC 2 Type II", "99.99% SLA guarantee", "Full audit logs", "Dedicated success manager"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1E293B] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">&#10003;</div>
                  <span className="text-[14px] text-text-body">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-3 px-6 rounded-full border border-border-default font-semibold text-[15px] hover:border-[#0F172A] hover:bg-slate-50 transition-colors">
              Talk To Sales &rarr;
            </button>
          </div>

        </div>
        
        <p className="text-center text-[14px] text-text-muted mt-12 w-full max-w-2xl mx-auto">
          All plans include: Custom domains · HTTPS · Git deploys · Global CDN · Docker support · API access
        </p>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 px-6 bg-white border-t border-[#F1F5F9] overflow-x-auto">
        <h3 className="text-[28px] font-heading font-bold text-center text-text-heading mb-12">Compare All Features</h3>
        
        <div className="max-w-[900px] mx-auto min-w-[700px]">
          <div className="grid grid-cols-4 border-b border-border-default pb-4 sticky top-[68px] bg-white z-20">
             <div className="font-semibold text-text-heading text-[16px]">Feature</div>
             <div className="font-semibold text-text-heading text-[16px] text-center">Hobby</div>
             <div className="font-semibold text-brand text-[16px] text-center">Pro</div>
             <div className="font-semibold text-text-heading text-[16px] text-center">Scale</div>
          </div>
          
          {[
            { cat: "Compute", items: [
               { name: "Services", h: "2", p: "Unlimited", s: "Unlimited" },
               { name: "RAM per service", h: "512MB", p: "2GB", s: "Custom" },
               { name: "CPU", h: "Shared", p: "Dedicated", s: "Dedicated Node" }
            ]},
            { cat: "Storage & Bandwidth", items: [
               { name: "Storage", h: "1GB", p: "50GB", s: "Unlimited" },
               { name: "Bandwidth", h: "100GB", p: "1TB", s: "Unlimited" },
               { name: "Global Edge Network", h: true, p: true, s: true }
            ]},
            { cat: "Databases", items: [
               { name: "Managed Postgres", h: false, p: true, s: true },
               { name: "Managed Redis", h: false, p: true, s: true },
               { name: "Automated Backups", h: false, p: "30 days", s: "1 year" }
            ]},
            { cat: "Teams", items: [
               { name: "Members", h: "1", p: "5", s: "Unlimited" },
               { name: "RBAC", h: false, p: true, s: true },
               { name: "SSO (SAML)", h: false, p: false, s: true }
            ]}
          ].map((section, idx) => (
             <div key={idx}>
               <div className="grid grid-cols-4 bg-bg-section-alt py-2 px-4 mt-4">
                  <div className="col-span-4 text-brand font-bold text-[13px] uppercase tracking-wider">{section.cat}</div>
               </div>
               {section.items.map((item, i) => (
                  <div key={i} className={`grid grid-cols-4 py-4 px-4 border-b border-border-default ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFF]"}`}>
                     <div className="text-[14px] text-text-body font-medium">{item.name}</div>
                     <div className="flex justify-center items-center">
                        {typeof item.h === "boolean" ? (item.h ? <span className="text-[#10B981] font-bold">&#10003;</span> : <span className="text-slate-300 font-bold">✕</span>) : <span className="text-[14px] text-text-heading">{item.h}</span>}
                     </div>
                     <div className="flex justify-center items-center">
                        {typeof item.p === "boolean" ? (item.p ? <span className="text-[#10B981] font-bold">&#10003;</span> : <span className="text-slate-300 font-bold">✕</span>) : <span className="text-[14px] text-text-heading font-semibold">{item.p}</span>}
                     </div>
                     <div className="flex justify-center items-center">
                        {typeof item.s === "boolean" ? (item.s ? <span className="text-[#10B981] font-bold">&#10003;</span> : <span className="text-slate-300 font-bold">✕</span>) : <span className="text-[14px] text-text-heading">{item.s}</span>}
                     </div>
                  </div>
               ))}
             </div>
          ))}
        </div>
      </section>

      {/* COST CALCULATOR */}
      <section className="py-24 px-6 bg-bg-page relative border-t border-[#E2E8F0] shadow-inner">
        <div className="max-w-[700px] mx-auto bg-white border border-border-default rounded-2xl p-8 shadow-[0_4px_24px_rgba(14,84,135,0.08)]">
           <h3 className="text-[28px] font-heading font-bold text-text-heading mb-8 text-center">Estimate Your Monthly Cost</h3>
           
           <div className="flex flex-col gap-6 mb-10">
              {/* slider 1 */}
              <div>
                 <div className="flex justify-between mb-2">
                    <label className="text-[14px] font-medium text-text-heading">Services</label>
                    <span className="text-[14px] font-bold text-brand">{services}</span>
                 </div>
                 <input type="range" min="1" max="50" value={services} onChange={e => setServices(parseInt(e.target.value))} className="w-full accent-brand" />
              </div>
              {/* slider 2 */}
              <div>
                 <div className="flex justify-between mb-3">
                    <label className="text-[14px] font-medium text-text-heading">RAM per service</label>
                    <span className="text-[14px] font-bold text-brand">{ram}GB</span>
                 </div>
                 <div className="flex gap-2">
                    {[0.5, 1, 2, 4].map(val => (
                       <button key={val} onClick={() => setRam(val)} className={`flex-1 py-1.5 rounded-lg text-[13px] font-medium transition-all border ${ram === val ? 'bg-brand text-white border-brand' : 'bg-white text-text-muted border-border-default hover:border-brand/50'}`}>
                         {val === 0.5 ? "512MB" : `${val}GB`}
                       </button>
                    ))}
                 </div>
              </div>
              {/* slider 3 */}
              <div>
                 <div className="flex justify-between mb-2">
                    <label className="text-[14px] font-medium text-text-heading">Monthly requests</label>
                    <span className="text-[14px] font-bold text-brand">{requests.toLocaleString()}</span>
                 </div>
                 <input type="range" min="10000" max="10000000" step="10000" value={requests} onChange={e => setRequests(parseInt(e.target.value))} className="w-full accent-brand" />
              </div>
              {/* slider 4 */}
              <div>
                 <div className="flex justify-between mb-2">
                    <label className="text-[14px] font-medium text-text-heading">Managed Databases</label>
                    <span className="text-[14px] font-bold text-brand">{databases}</span>
                 </div>
                 <input type="range" min="0" max="5" value={databases} onChange={e => setDatabases(parseInt(e.target.value))} className="w-full accent-brand" />
              </div>
              {/* slider 5 */}
              <div>
                 <div className="flex justify-between mb-2">
                    <label className="text-[14px] font-medium text-text-heading">Team members</label>
                    <span className="text-[14px] font-bold text-brand">{team}</span>
                 </div>
                 <input type="range" min="1" max="50" value={team} onChange={e => setTeam(parseInt(e.target.value))} className="w-full accent-brand" />
              </div>
           </div>

           <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border border-border-blue rounded-xl p-6 text-center shadow-inner">
             <div className="text-[14px] text-text-muted mb-2">Estimated cost:</div>
             <div className="text-[48px] font-heading font-extrabold text-brand leading-none mb-4">${estimatedCost} <span className="text-[18px] text-brand-light font-medium">/ month</span></div>
             
             <div className="flex items-center justify-center gap-4">
                <span className="bg-brand-light/20 text-brand text-[13px] font-bold px-3 py-1 rounded-full uppercase">
                  Recommended: {recommendedPlan}
                </span>
             </div>
             
             <button className="mt-6 px-8 py-3 bg-brand text-white font-semibold rounded-full hover:bg-brand-hover shadow-md transition-all">
               Start with {recommendedPlan} &rarr;
             </button>
           </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[700px] mx-auto">
          <h3 className="text-[28px] font-heading font-bold text-text-heading mb-8">Frequently Asked Questions</h3>
          
          <div className="flex flex-col">
             {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border-default">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
                  >
                    <span className="text-[15px] font-semibold text-text-heading">{faq}</span>
                    <svg className={`w-5 h-5 text-text-muted transition-transform duration-200 ${openFaq === i ? "rotate-90" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                  <AnimatePresence>
                     {openFaq === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                           <p className="pb-5 text-[14px] text-text-body leading-[1.7]">
                             Yes, our free tier is designed to give you everything you need to host a hobby project indefinitely. It comes with custom domains, automatic HTTPS, and enough compute for small applications.
                           </p>
                        </motion.div>
                     )}
                  </AnimatePresence>
                </div>
             ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}

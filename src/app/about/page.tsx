"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center md:items-start text-center md:text-left overflow-hidden">
        <div className="absolute inset-0 circuit-pattern pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center md:items-start">
          <div className="bg-bg-blue-tint text-brand text-[13px] font-semibold px-4 py-1.5 rounded-full mb-6 border border-border-blue inline-flex">
            Our Story
          </div>
          
          <h1 className="text-[52px] font-heading font-extrabold text-text-heading leading-[1.1] tracking-[-0.02em] mb-6 max-w-[680px]">
            We Exist to Eliminate <br />
            DevOps <span className="gradient-text">Friction.</span>
          </h1>
          
          <p className="text-[18px] text-text-body max-w-[680px] leading-[1.7] mb-10">
            NovaDeploy was born from frustration — with slow deploys, 
            confusing billing, and platforms that treat developers 
            like sysadmins.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 px-6 bg-white relative z-10 border-t border-[#F1F5F9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Large Pull Quote */}
          <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border border-border-blue border-l-[4px] border-l-brand rounded-2xl p-8 shadow-sm">
            <p className="text-[28px] text-[#1E40AF] font-heading font-semibold italic leading-tight mb-8">
              "The best infrastructure is the kind you never have to think about."
            </p>
            <div className="text-[15px] font-semibold text-brand-hover">
              — Alex Chen, CEO NovaDeploy
            </div>
          </div>

          {/* Right Story Text */}
          <div className="flex flex-col gap-6 text-[16px] text-text-body leading-[1.7]">
            <p>
              In 2024, our founding team was working on a complex microservices architecture at
              a hyper-growth startup. We found ourselves spending 30% of our week just managing
              deployments, configuring YAML files, and debugging infrastructure issues.
            </p>
            <p>
              We tried every platform on the market. Some were too simplistic and couldn't handle
              our database needs. Others required a PhD in DevOps just to set up a staging environment.
              There was no middle ground.
            </p>
            <p>
              So we built NovaDeploy. Our goal wasn't just to make deployments faster—although 
              we proudly average sub-3 minute deploys. Our goal was to build a platform that 
              respects a developer's time, offering transparency, predictability, and a 
              genuinely joyful developer experience.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="relative py-[96px] px-6 bg-bg-page overflow-hidden">
        {/* Top Cloud Blob */}
        <div className="absolute top-0 inset-x-0 -translate-y-[99%]">
          <svg viewBox="0 0 1440 120" className="w-full text-bg-page fill-current" preserveAspectRatio="none"><path d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60 L1440,120 L0,120 Z"></path></svg>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-heading font-bold text-text-heading text-center mb-16">What We Believe.</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: "⚡", title: "Speed", desc: "Every millisecond counts. We relentlessly optimize for developer velocity." },
               { icon: "🔍", title: "Transparency", desc: "No hidden fees, no opaque billing, no unexplainable deployment errors." },
               { icon: "🤝", title: "Empathy", desc: "We design for humans. Intuitive UI beats powerful but confusing CLI every time." },
               { icon: "🛡️", title: "Reliability", desc: "Boring infrastructure is good infrastructure. We prioritize stability above all else." }
             ].map((value, i) => (
               <div key={i} className="bg-white border border-border-default rounded-2xl p-6 shadow-[0_4px_24px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-transform">
                 <div className="w-12 h-12 bg-bg-blue-tint rounded-xl flex items-center justify-center text-[24px] mb-6">{value.icon}</div>
                 <h3 className="text-[18px] font-bold text-text-heading mb-3">{value.title}</h3>
                 <p className="text-[14px] text-text-muted leading-relaxed">{value.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-[96px] px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-heading font-bold text-text-heading mb-4">The Team.</h2>
            <p className="text-[18px] text-text-body">Engineers from Stripe, Vercel, GitHub, Cloudflare.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { name: "Alex Chen", role: "CEO & Co-founder", loc: "🇺🇸 San Francisco", bg: "from-blue-400 to-blue-600", color: "bg-blue-500" },
               { name: "Sarah Jenkins", role: "CTO & Co-founder", loc: "🇬🇧 London", bg: "from-purple-400 to-purple-600", color: "bg-purple-500" },
               { name: "David Kim", role: "VP Engineering", loc: "🇨🇦 Toronto", bg: "from-teal-400 to-teal-600", color: "bg-teal-500" },
               { name: "Elena Rodriguez", role: "Head of Product", loc: "🇪🇸 Madrid", bg: "from-amber-400 to-amber-600", color: "bg-amber-500" },
               { name: "Marcus Johnson", role: "Principal Engineer", loc: "🇺🇸 Austin", bg: "from-rose-400 to-rose-600", color: "bg-rose-500" },
               { name: "Priya Sharma", role: "Developer Relations", loc: "🇮🇳 Bengaluru", bg: "from-indigo-400 to-indigo-600", color: "bg-indigo-500" },
               { name: "Tom Wilson", role: "Infrastructure Lead", loc: "🇦🇺 Sydney", bg: "from-cyan-400 to-cyan-600", color: "bg-cyan-500" },
               { name: "Wei Lin", role: "Design Lead", loc: "🇸🇬 Singapore", bg: "from-fuchsia-400 to-fuchsia-600", color: "bg-fuchsia-500" }
             ].map((member, i) => (
               <div key={i} className="bg-white border border-border-default rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(37,99,235,0.08)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)] transition-shadow group flex flex-col relative">
                  <div className={`h-[80px] w-full bg-gradient-to-r ${member.bg}`}></div>
                  
                  <div className="flex-1 flex flex-col items-center text-center p-5 pt-0 relative">
                     <div className={`w-14 h-14 rounded-full border-4 border-white ${member.color} -mt-7 mb-3 flex items-center justify-center text-white font-bold text-[18px] z-10`}>
                       {member.name.charAt(0)}{member.name.split(' ')[1]?.charAt(0)}
                     </div>
                     <h4 className="text-[15px] font-semibold text-text-heading mb-1 group-hover:text-brand transition-colors">{member.name}</h4>
                     <div className="text-[13px] text-text-muted mb-4">{member.role}</div>
                     <div className="text-[12px] text-text-light mt-auto w-full border-t border-border-default pt-3 flex items-center justify-between">
                        <span>{member.loc}</span>
                        <a href="#" className="w-6 h-6 rounded-full bg-bg-blue-tint text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors">in</a>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CAREERS CTA */}
      <section className="py-[80px] px-6 bg-white border-t border-[#F1F5F9]">
         <div className="max-w-4xl mx-auto rounded-[24px] bg-gradient-to-br from-[#1E40AF] to-[#2563EB] p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 circuit-pattern opacity-[0.1] -z-0"></div>
            <div className="relative z-10">
               <h2 className="text-[36px] font-heading font-bold mb-4">Join Us.</h2>
               <p className="text-[16px] text-white/80 max-w-lg mx-auto mb-8">We're always looking for talented engineers and designers who are passionate about developer tools.</p>
               <button className="px-8 py-3 bg-white text-brand rounded-full font-semibold hover:bg-slate-50 shadow-md transition-all">
                  Open Positions &rarr;
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}

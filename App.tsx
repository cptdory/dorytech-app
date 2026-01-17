
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Assistant from './components/Assistant';
import { Service, PricingTier } from './types';

const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Custom Website Building',
    description: 'High-conversion, ultra-fast digital experiences. I use Next.js and Tailwind to create modern apps, or PHP/Laravel for classic robust builds.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Next.js & React Core', 'PHP & Laravel Development', 'SEO Architecture', 'Lightning Core Web Vitals']
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Chatbots',
    description: 'Infuse your business with intelligence. I build custom AI assistants, automated content pipelines, and LLM-powered tools tailored to your data.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: ['Custom AI Chatbot Dev', 'Gemini & OpenAI API Setup', 'Automated Content Agents', 'AI-Driven Data Analysis']
  },
  {
    id: 'sys-cust',
    title: 'System Customization',
    description: 'Automating your workflow is my specialty. I bridge the gap between your manual processes and a fully digital, efficient ecosystem.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Custom CRM Development', 'PHP API Engineering', 'Internal Productivity Tools', 'Database Architecture']
  },
  {
    id: 'deployment',
    title: 'Managed Deployment',
    description: 'The final step to going live. I manage the domain, the servers, and the security protocols so you never see a 404 error.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    features: ['Vercel, AWS & Shared PHP Hosting', 'Cloudflare WAF Setup', 'Automated CI/CD Pipelines', 'Real-time Monitoring']
  }
];

const pricing: PricingTier[] = [
  {
    name: 'Standard',
    price: '₱xxxx',
    description: 'Perfect for established businesses needing a professional refresh.',
    features: ['Bespoke Design (Next.js or PHP)', 'Deployment & Domain Setup', 'Base SEO Configuration', 'Training Session', '30-Day Launch Support'],
  },
  {
    name: 'Growth',
    price: '₱xxxx',
    description: 'Full system integration with smart AI features.',
    features: ['Everything in Standard', 'Custom AI Chatbot Integration', 'Laravel Backend / System Setup', 'Advanced Analytics Dashboard', '3 Months Concierge Support'],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Deep-tech solutions for complex business challenges.',
    features: ['Full Stack Development', 'Custom LLM Implementation', 'Legacy System Integration', 'Dedicated Maintenance Slot'],
  }
];

const projects = [
  { title: 'x', category: 'Custom Portfolio', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80' },
  { title: 'x', category: 'SaaS Dashboard', img: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&w=800&q=80' },
  { title: 'x', category: 'Appointment System', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80' },
  { title: 'x', category: 'AI WebApp', img: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80' },
];

const faqs = [
  { 
    q: "Will I own the website after development?", 
    a: "Absolutely. Once the project is complete and the final invoice is paid, 100% of the intellectual property, code, and accounts belong to you. You are the sole owner." 
  },
  { 
    q: "Do you offer AI and Chatbot services?", 
    a: "Yes! AI is a huge part of DoryTech. I can build custom chatbots integrated with an AI model, automate your customer support, or build smart tools that analyze your business data using Large Language Models." 
  },
  { 
    q: "What programming languages do you use?", 
    a: "I primarily work with modern JavaScript ecosystems (React, Next.js, Node.js), but I am also an expert in PHP and Laravel development. If you prefer PHP for your project, I can absolutely deliver a high-quality solution using it." 
  },
];

const App: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-white">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[140px] opacity-50"></div>
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100"></div>
        </div>
        
        <div className="container mx-auto relative">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            {/* Catchy Tech Badge */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-slate-900 text-white rounded-full text-[11px] font-black uppercase tracking-[0.3em] animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Next.js • AI Integration</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black text-slate-900 leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              Vision to <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">Production.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-500 max-w-3xl mx-auto font-medium leading-tight animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Zero friction. Full ownership. DoryTech builds the smart web systems and AI agents that drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
              <a href="#contact" className="group w-full sm:w-auto px-14 py-7 bg-slate-900 text-white font-black rounded-3xl hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-200 flex items-center justify-center">
                Start Building
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#portfolio" className="w-full sm:w-auto px-14 py-7 bg-white text-slate-900 border-2 border-slate-100 font-black rounded-3xl hover:bg-slate-50 transition-all active:scale-95 text-center">
                View Gallery
              </a>
            </div>

            {/* Floating Tech Elements */}
            <div className="hidden xl:block absolute -left-20 top-1/2 -translate-y-1/2 p-6 glass rounded-3xl border-blue-100 shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center space-x-3 text-slate-400 font-mono text-xs">
                    <span className="text-blue-500">const</span> deploy = () =&gt; (
                </div>
                <div className="pl-4 text-slate-800 font-mono text-sm font-bold">"Success"</div>
            </div>

            <div className="hidden xl:block absolute -right-20 top-1/3 p-6 glass rounded-3xl border-indigo-100 shadow-xl animate-pulse">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">AI Enabled</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section id="services" className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-12 rounded-[48px] border border-slate-100 flex flex-col justify-between group hover:border-blue-200 transition-all">
              <div>
                <div className="w-20 h-20 bg-blue-600 text-white rounded-[24px] flex items-center justify-center mb-10 group-hover:rotate-6 transition-transform">
                  {services[0].icon}
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-6">{services[0].title}</h3>
                <p className="text-xl text-slate-500 font-medium mb-12 max-w-xl">{services[0].description}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {services[0].features.map((f, i) => (
                  <div key={i} className="flex items-center text-slate-900 font-bold">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900 p-12 rounded-[48px] text-white flex flex-col justify-between group hover:bg-blue-600 transition-colors">
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-[20px] flex items-center justify-center mb-10">
                  {services[1].icon}
                </div>
                <h3 className="text-3xl font-black mb-6">{services[1].title}</h3>
                <p className="text-slate-400 group-hover:text-white/80 transition-colors font-medium">{services[1].description}</p>
              </div>
              <div className="mt-12 space-y-4">
                 {services[1].features.map((f, i) => (
                  <div key={i} className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white/80">{f}</div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-10 rounded-[40px] border border-slate-100 flex items-start space-x-8 group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {services[2].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{services[2].title}</h3>
                  <p className="text-slate-500 font-medium">{services[2].description}</p>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[40px] border border-slate-100 flex items-start space-x-8 group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {services[3].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{services[3].title}</h3>
                  <p className="text-slate-500 font-medium">{services[3].description}</p>
                </div>
              </div>
              
              <a 
                href="#it-management"
                className="md:col-span-2 bg-blue-50 p-10 rounded-[40px] border border-blue-100 flex items-center justify-between group cursor-pointer hover:bg-blue-600 hover:text-white transition-all"
              >
                <div>
                  <h3 className="text-2xl font-black mb-2">Need a Monthly Tech Partner?</h3>
                  <p className="text-blue-600 group-hover:text-white font-bold">Learn about Personal IT Management →</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 group-hover:text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Personal IT Service Highlight */}
      <section id="it-management" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-full h-full border-2 border-slate-100 rounded-[60px] -z-10"></div>
               <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1000&q=80" 
                alt="Personal IT Management" 
                className="rounded-[48px] shadow-2xl grayscale"
               />
               <div className="absolute bottom-8 right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 animate-bounce max-w-xs">
                <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">Managed Monthly</p>
                <p className="text-slate-900 font-bold leading-tight">Zero downtime. Daily backups. Total peace of mind.</p>
               </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">Your Personal <br /><span className="text-blue-600">IT Department.</span></h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Owning a website is just the beginning. Keeping it secure, backed up, and up-to-date is a full-time job. 
              </p>
              <p className="text-lg text-slate-600 font-medium">
                DoryTech offers a <span className="text-slate-900 font-black underline decoration-blue-500 decoration-4">Personal IT service</span>. For a small monthly fee, I handle all the maintenance, backups, and small adjustments, so you can focus on your business while I focus on the engine.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {['24/7 Security Monitoring', 'Daily Cloud Backups', 'Performance Audits', 'SSL Certificate Management', 'Monthly Progress Reports', 'Direct Tech Consulting'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-900 font-bold">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <a href="#contact" className="inline-block px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-100">
                  Inquire about Maintenance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Portfolio */}
      <section id="portfolio" className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-6">Built to <span className="text-blue-400 italic underline decoration-blue-400/30">Last.</span></h2>
              <p className="text-slate-400 text-xl font-medium max-w-xl">Every system I build is custom-tailored to handle scale and represent your brand perfectly.</p>
            </div>
            <a href="#contact" className="mt-8 md:mt-0 font-black uppercase tracking-widest text-sm hover:text-blue-400 transition-colors">Start your project →</a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <a href="#contact" key={i} className="group relative rounded-[40px] overflow-hidden aspect-video cursor-pointer block">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 transition-transform group-hover:-translate-y-2">
                  <p className="text-blue-400 font-black text-xs uppercase tracking-widest mb-2">{proj.category}</p>
                  <h3 className="text-4xl font-black">{proj.title}</h3>
                </div>
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Minimalist Modern */}
      <section id="pricing" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Clear Investment.</h2>
            <p className="text-xl text-slate-500 font-medium">No hidden fees. You own your code. Maintenance is optional, quality is mandatory.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {pricing.map((tier) => (
              <div 
                key={tier.name} 
                className={`p-12 rounded-[56px] ${tier.highlighted ? 'bg-slate-900 text-white scale-110 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]' : 'bg-slate-50/50 text-slate-900 border border-slate-100'} transition-all flex flex-col`}
              >
                <div className="mb-10">
                  <h3 className={`text-2xl font-black mb-1 ${tier.highlighted ? 'text-blue-400' : 'text-slate-900'}`}>{tier.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-black tracking-tighter">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className={`ml-2 text-sm font-bold uppercase ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>/ Project</span>}
                  </div>
                </div>
                
                <div className="space-y-6 flex-grow mb-12">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className={`text-sm font-bold ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="#contact" 
                  className={`w-full py-6 rounded-[24px] font-black text-center transition-all ${tier.highlighted ? 'bg-blue-600 text-white hover:bg-white hover:text-slate-900' : 'bg-white text-slate-900 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600'}`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Modernized */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center mb-20 tracking-tighter">The Details.</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-[32px] border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h4 className="text-xl font-bold text-slate-900">{faq.q}</h4>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </summary>
                <div className="px-8 pb-8 pt-0">
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Form */}
      <section id="contact" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[64px] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
            
            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div className="space-y-12">
                <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">Ready to <br /><span className="text-blue-400">Ship?</span></h2>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10">
                       <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Direct Email</p>
                      <p className="text-xl font-bold">francisvonjazelofranco@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10">
                       <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Fast Lane</p>
                      <p className="text-xl font-bold">Responds within the day</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all" placeholder="Full Name" />
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all" placeholder="Work Email" />
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all appearance-none">
                  <option className="bg-slate-900">Custom Website Build</option>
                  <option className="bg-slate-900">AI Integration & Chatbot</option>
                  <option className="bg-slate-900">Managed IT Service</option>
                  <option className="bg-slate-900">System Customization</option>
                </select>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-lg font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all h-40" placeholder="Describe the vision..."></textarea>
                <button type="submit" disabled={submitted} className={`w-full py-6 rounded-[24px] font-black text-xl transition-all shadow-2xl ${submitted ? 'bg-green-500 shadow-green-500/20' : 'bg-blue-600 hover:bg-white hover:text-slate-900 shadow-blue-500/20'}`}>
                  {submitted ? 'Inquiry Sent!' : 'Launch Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalist */}
      <footer className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-16 gap-8">
             <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl">D</div>
              <span className="text-3xl font-black tracking-tighter text-slate-900">Dory<span className="text-blue-600">Tech</span></span>
            </div>
            
            <div className="flex space-x-12 text-sm font-black uppercase tracking-widest text-slate-400">
              <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
            
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">
              Built with precision by Dory. 
            </p>
          </div>
        </div>
      </footer>

      <Assistant />
    </div>
  );
};

export default App;

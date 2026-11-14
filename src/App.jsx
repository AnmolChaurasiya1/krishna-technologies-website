import React, { useState } from "react";
import {
  ArrowUpRight, ArrowRight, Check, CheckCircle2, ChevronDown, ChevronUp,
  ShieldCheck, Mail, Target, Palette, BarChart3, Settings2, Menu, X,
  Sparkles, LockKeyhole, Clock3, MessageCircle, Send, Instagram, Linkedin,
  Globe2, Workflow, BadgeCheck
} from "lucide-react";

const services = [
  { icon: Target, number: "01", title: "Campaign planning", desc: "A clear campaign plan built around your audience, purpose, timing and measurable goals." },
  { icon: Palette, number: "02", title: "Email design & templates", desc: "Responsive, on-brand email layouts designed to look polished across desktop and mobile." },
  { icon: Settings2, number: "03", title: "Campaign setup & management", desc: "Practical setup, testing, scheduling and campaign coordination—with clear checkpoints." },
  { icon: BarChart3, number: "04", title: "Reporting & optimisation", desc: "Understand campaign outcomes through useful reporting and thoughtful next-step recommendations." }
];

const steps = [
  ["01", "Understand", "We learn about your organisation, audience, goals and the message you want to share."],
  ["02", "Prepare", "We review the permission basis, clean the campaign data and prepare the email experience."],
  ["03", "Test", "We check rendering, links, sender identity and campaign details before launch."],
  ["04", "Learn", "We share the available results and identify practical improvements for the next campaign."]
];

const faqs = [
  ["What does Krishna Technologies do?", "We provide managed email campaign support, including planning, email design, campaign setup and reporting. The exact scope is agreed before work begins."],
  ["Can you design a custom email template?", "Yes. We can create a responsive email template aligned with your brand, campaign objective and content."],
  ["Do you work with purchased or scraped email lists?", "No. We work with permission-based audiences. We do not send campaigns to purchased, scraped or otherwise non-consensual lists."],
  ["Can you guarantee inbox placement or open rates?", "No responsible provider can guarantee inbox placement, opens or sales. Results depend on list quality, consent, sender reputation, content and recipient behaviour."],
  ["How do I get a quote?", "Share your organisation, campaign objective, approximate audience size and timeline through the contact form. We will review the details and discuss a suitable scope."]
];

function Logo() {
  return <a className="brand" href="#home" aria-label="Krishna Technologies home">
    <span className="brand-mark"><span>K</span><i /></span>
    <span className="brand-copy"><b>KRISHNA</b><small>TECHNOLOGIES</small></span>
  </a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", organisation: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Website enquiry — Krishna Technologies");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organisation}\n\nCampaign details:\n${form.message}`
    );
    // Replace this address with your official business inbox before publishing.
    window.location.href = `mailto:hello@krishnaatechnologies.cloud?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="announcement"><span className="announcement-dot" /> Thoughtful campaigns. Clear communication. Responsible delivery.</div>
    <header className="header">
      <div className="container nav-wrap">
        <Logo />
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Our process</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#faq" onClick={closeMenu}>FAQs</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={16}/></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> KRISHNA TECHNOLOGIES <span className="eyebrow-pill">EMAIL CAMPAIGN PARTNER</span></div>
            <h1>Make every email<br/><span>worth opening.</span></h1>
            <p className="hero-lead">We help organisations communicate with their audiences through thoughtfully planned, beautifully designed and responsibly managed email campaigns.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Discuss your campaign <ArrowUpRight size={18}/></a>
              <a className="text-link" href="#services">Explore what we do <ArrowRight size={17}/></a>
            </div>
            <div className="hero-assurance">
              <div className="assurance-icon"><ShieldCheck size={18}/></div>
              <div><b>Permission-first approach</b><span>We prioritise consent, transparency and recipient choice.</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration of a professionally designed email campaign">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="float-chip chip-top"><span className="chip-dot green" /> Campaign checked</div>
            <div className="mail-window">
              <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>CAMPAIGN PREVIEW</span><span className="window-lock"><LockKeyhole size={12}/> SECURE</span></div>
              <div className="mail-toolbar"><span className="avatar">K</span><div><b>Krishna Technologies</b><small>campaign@yourdomain.com</small></div><span className="mail-date">Today</span></div>
              <div className="mail-content">
                <div className="mail-banner"><span className="mail-kicker">A NOTE FROM YOUR TEAM</span><strong>Good communication<br/>starts with trust.</strong><div className="banner-orb" /></div>
                <div className="mail-lines"><i/><i/><i/></div>
                <div className="mail-button">Explore the update <ArrowUpRight size={13}/></div>
                <div className="mail-footer">You’re receiving this because you opted in.<br/><u>Unsubscribe</u> · Privacy</div>
              </div>
            </div>
            <div className="float-chip chip-bottom"><span className="chip-icon"><Check size={13}/></span> Tested before sending</div>
            <div className="visual-caption"><span className="caption-star">✳</span><span>Clarity in every detail</span></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>STRATEGY</span><i/><span>DESIGN</span><i/><span>CAMPAIGN MANAGEMENT</span><i/><span>INSIGHTS</span></div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <div className="trust-intro"><span className="mini-label">THE WAY WE WORK</span><b>Built on the things<br/>that matter.</b></div>
          <div className="trust-item"><ShieldCheck/><div><b>Responsible by design</b><span>Consent-led communication</span></div></div>
          <div className="trust-item"><BadgeCheck/><div><b>Clear scope & process</b><span>No confusing promises</span></div></div>
          <div className="trust-item"><MessageCircle/><div><b>Human support</b><span>Direct, helpful communication</span></div></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div><span className="section-kicker">WHAT WE CAN HELP WITH</span><h2>Good campaigns are<br/><em>never just a send button.</em></h2></div>
            <p>From the first idea to the final report, we bring the moving parts together so your team can focus on the people you want to reach.</p>
          </div>
          <div className="service-grid">
            {services.map(({icon: Icon, number, title, desc}) => <article className="service-card" key={number}>
              <div className="service-top"><span>{number} / SERVICE</span><span className="service-icon"><Icon size={21}/></span></div>
              <h3>{title}</h3><p>{desc}</p><a href="#contact" aria-label={`Enquire about ${title}`}>Discuss this service <ArrowUpRight size={16}/></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="dark-section" id="about">
        <div className="container about-grid">
          <div className="about-art">
            <div className="about-ring ring-a"/><div className="about-ring ring-b"/>
            <div className="about-emblem"><span>कृ</span><i>✳</i></div>
            <div className="about-note"><Sparkles size={15}/> Technology with a human touch</div>
          </div>
          <div className="about-copy">
            <span className="section-kicker light">A LITTLE ABOUT US</span>
            <h2>Technology should make<br/><em>communication more human.</em></h2>
            <p>Krishna Technologies is built around a simple idea: the right message, sent thoughtfully, can create a meaningful connection. We combine practical campaign execution with a strong focus on transparency, audience respect and a professional experience.</p>
            <div className="about-points">
              <div><CheckCircle2/><span><b>Honest expectations</b><small>We explain what is included and what cannot be guaranteed.</small></span></div>
              <div><CheckCircle2/><span><b>Audience respect</b><small>We support consent-based lists and clear unsubscribe options.</small></span></div>
              <div><CheckCircle2/><span><b>Careful execution</b><small>We review campaign details before they go live.</small></span></div>
            </div>
            <a className="btn btn-outline" href="#contact">Get to know us <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <div className="center-heading"><span className="section-kicker">A CLEAR, SIMPLE WORKFLOW</span><h2>From first conversation<br/><em>to thoughtful follow-through.</em></h2><p>You always know what happens next. We agree on the scope before campaign work begins.</p></div>
          <div className="process-grid">
            {steps.map(([num, title, desc], i) => <div className="process-step" key={num}>
              <div className="process-number">{num}<span>{i === 0 ? <MessageCircle size={17}/> : i === 1 ? <Workflow size={17}/> : i === 2 ? <CheckCircle2 size={17}/> : <BarChart3 size={17}/>}</span></div>
              {i !== 3 && <div className="process-connector"/>}
              <h3>{title}</h3><p>{desc}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="commitment-section">
        <div className="container commitment-inner">
          <div className="commitment-icon"><ShieldCheck size={27}/></div>
          <div><span className="section-kicker light">OUR COMMITMENT</span><h2>Trust is earned before<br/>the campaign is sent.</h2><p>We do not work with purchased or scraped email lists. Campaigns should be sent to people who have a valid reason to hear from you, with a clear way to opt out.</p></div>
          <div className="commitment-list"><span><Check/> Permission-based audiences</span><span><Check/> Sender identity and test checks</span><span><Check/> Clear unsubscribe experience</span><span><Check/> Transparent reporting</span></div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div><span className="section-kicker">GOOD TO KNOW</span><h2>Questions, answered<br/><em>with clarity.</em></h2><p>Have a question that is not covered here? Send us a note and we’ll be happy to discuss it.</p><a className="text-link" href="#contact">Ask us directly <ArrowUpRight size={17}/></a></div>
          <div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${openFaq === i ? "active" : ""}`} key={q}>
            <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{q}</span>{openFaq === i ? <ChevronUp/> : <ChevronDown/>}</button>
            {openFaq === i && <p>{a}</p>}
          </div>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="section-kicker light">LET’S START A CONVERSATION</span>
            <h2>Have a campaign<br/>in mind?</h2>
            <p>Tell us a little about your organisation and what you’re looking to achieve. We’ll get back to you to discuss the next step.</p>
            <div className="contact-detail"><span><Mail size={17}/></span><div><small>EMAIL US</small><b>hello@krishnaatechnologies.cloud</b></div></div>
            <div className="contact-detail"><span><Globe2 size={17}/></span><div><small>WEBSITE</small><b>krishnaatechnologies.cloud</b></div></div>
            <p className="contact-small">Replace the contact details above with your verified business contact information before publishing.</p>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-heading"><span>YOUR ENQUIRY</span><span className="form-secure"><LockKeyhole size={13}/> PRIVATE & DIRECT</span></div>
            <label>Your name<input name="name" value={form.name} onChange={update} placeholder="How should we address you?" required /></label>
            <label>Work email<input type="email" name="email" value={form.email} onChange={update} placeholder="you@company.com" required /></label>
            <label>Organisation <span className="optional">(optional)</span><input name="organisation" value={form.organisation} onChange={update} placeholder="Your company or institution" /></label>
            <label>Tell us about your campaign<textarea name="message" value={form.message} onChange={update} placeholder="Your goals, audience, timeline and any questions..." rows="4" required /></label>
            <button className="btn btn-primary submit-btn" type="submit">Send enquiry <Send size={16}/></button>
            {submitted && <p className="form-note"><CheckCircle2 size={15}/> Your email app should open with the enquiry pre-filled. Please send it to complete your enquiry.</p>}
            <p className="privacy-note">By contacting us, you agree that we may use these details to respond to your enquiry. We do not add enquiry contacts to marketing lists without permission.</p>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand"><Logo/><p>Thoughtful email campaigns.<br/>Professional communication.</p></div>
        <div className="footer-col"><b>EXPLORE</b><a href="#services">Services</a><a href="#process">Our process</a><a href="#about">About us</a><a href="#faq">FAQs</a></div>
        <div className="footer-col"><b>GET IN TOUCH</b><a href="#contact">Contact</a><a href="mailto:hello@krishnaatechnologies.cloud">Email us</a><span>India</span></div>
        <div className="footer-col footer-note"><b>OUR PRINCIPLE</b><p>Good communication respects the person on the other side of the inbox.</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Krishna Technologies. All rights reserved.</span><span>Built with care <span className="footer-heart">✳</span></span></div>
    </footer>
  </div>;
}

export default App;

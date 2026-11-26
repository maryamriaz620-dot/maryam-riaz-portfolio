import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Code2, Palette, Braces, Atom, BookOpen, GraduationCap, Sparkles,
  Send, CheckCircle2, Download, ExternalLink
} from 'lucide-react'
import Navbar from './components/Navbar'
import SectionTitle from './components/SectionTitle'
import Footer from './components/Footer'

const skills = [
  { name: 'HTML5', icon: Code2, desc: 'Semantic, accessible page structure and clean markup.' },
  { name: 'CSS3', icon: Palette, desc: 'Responsive layouts, modern styling and polished interfaces.' },
  { name: 'JavaScript', icon: Braces, desc: 'Interactive experiences and dynamic browser functionality.' },
  { name: 'React', icon: Atom, desc: 'Reusable components and maintainable user interfaces.' },
]

const emailAddress = 'maryamriaz620@gmail.com'

function AvatarArt() {
  return (
    <div className="avatar-stage" aria-label="Illustration of a female web developer working at a laptop" role="img">
      <div className="avatar-orbit orbit-one" />
      <div className="avatar-orbit orbit-two" />
      <div className="float-chip chip-code"><Code2 size={19} /></div>
      <div className="float-chip chip-star"><Sparkles size={18} /></div>
      <div className="avatar-glow" />
      <div className="avatar-card">
        <div className="avatar-window"><i /><i /><i /><span>creative-mode.jsx</span></div>
        <div className="avatar-person">
          <div className="hair-back" />
          <div className="neck" />
          <div className="face"><span className="eye eye-left" /><span className="eye eye-right" /><span className="smile" /></div>
          <div className="hair-front" />
          <div className="body"><span className="shirt-seam" /></div>
          <div className="laptop"><div className="laptop-logo">&lt;/&gt;</div></div>
        </div>
      </div>
      <div className="avatar-caption"><span className="status-dot" /> Available to learn & collaborate</div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> Fresh Graduate · Open to Opportunities</div>
          <p className="hero-kicker">HELLO, WORLD! I'M</p>
          <h1>Maryam <span>Riaz</span><b className="hero-period">.</b></h1>
          <h2>Aspiring <span>Web Developer</span></h2>
          <p className="hero-description">I am a fresh Information Technology graduate passionate about building modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View My Projects <ArrowRight size={17} /></a>
            <a className="button button-ghost" href="/Maryam-Riaz-CV.pdf" download><Download size={17} /> Download CV</a>
          </div>
          <div className="hero-socials">
            <span>FIND ME ON</span>
            <a href="https://github.com/maryamriaz620-dot" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/in/maryam-riaz-930025400/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href={`mailto:${emailAddress}`} aria-label="Email"><Mail /></a>
          </div>
        </div>
        <AvatarArt />
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  )
}

function About() {
  return (
    <section className="section section-soft" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-monogram">MR<span>.</span></div>
          <div className="about-note"><Sparkles size={17} /> Curious mind. Creative approach.</div>
          <div className="about-outline" />
        </div>
        <div className="about-copy">
          <SectionTitle eyebrow="A LITTLE ABOUT ME" title="Turning ideas into" accent="digital experiences." />
          <p>I am Maryam Riaz, a BS Information Technology graduate from Virtual University of Pakistan (2026).</p>
          <p>I have a strong interest in web development and enjoy creating visually appealing and functional websites. My technical foundation includes HTML, CSS, JavaScript, and React.</p>
          <p>I am enthusiastic about learning new technologies, solving problems, and developing my skills through practical projects.</p>
          <div className="about-facts">
            <div><span className="fact-icon"><GraduationCap size={18} /></span><span><b>BS Information Technology</b><small>Virtual University of Pakistan</small></span></div>
            <div><span className="fact-icon"><MapPin size={18} /></span><span><b>Based in Pakistan</b><small>Open to remote opportunities</small></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle eyebrow="MY TOOLKIT" title="Technologies I" accent="work with." description="The core technologies I use to build responsive and engaging web experiences." />
        <div className="skills-grid">
          {skills.map(({ name, icon: Icon, desc }, i) => (
            <article className="skill-card" key={name}>
              <div className="skill-top"><span className="skill-icon"><Icon size={25} /></span><span className="skill-index">0{i + 1}</span></div>
              <h3>{name}</h3><p>{desc}</p>
              <div className="skill-line"><span /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section section-soft" id="projects">
      <div className="container">
        <SectionTitle eyebrow="SELECTED WORK" title="Featured" accent="project." description="A closer look at a project I have worked on. More projects can be added here as they become ready to share." />
        <article className="project-card">
          <div className="project-preview">
            <div className="browser-bar"><span /><span /><span /><small>bookshop / home</small></div>
            <div className="bookshop-preview">
              <div className="mock-nav"><b>BOOK<span>SHOP.</span></b><div>HOME　 BOOKS　 CATEGORIES　 ABOUT</div><i>⌕</i></div>
              <div className="mock-hero"><small>YOUR NEXT CHAPTER STARTS HERE</small><strong>Stories worth<br /><em>getting lost in.</em></strong><span>Explore a world of books, ideas and imagination.</span><b>EXPLORE BOOKS ↗</b></div>
              <div className="mock-books"><div className="mock-book book-a" /><div className="mock-book book-b" /><div className="mock-book book-c" /></div>
            </div>
            <span className="preview-label">PROJECT PREVIEW</span>
          </div>
          <div className="project-info">
            <div className="project-meta"><span>01 / FRONTEND PROJECT</span><span className="project-status"><i /> Featured</span></div>
            <h3>BOOKSHOP <span>—</span><br />Online Bookstore Frontend</h3>
            <p>A modern e-commerce bookstore frontend designed to provide an attractive and organized online book browsing experience, including Pakistani literature, Islamic books, novels, and storybooks.</p>
            <div className="project-features">
              {['Book categories', 'Product cards', 'Modern homepage', 'Responsive interface', 'Book presentation'].map(x => <span key={x}>{x}</span>)}
            </div>
            <div className="project-links">
              <a className="button button-primary button-small" href="https://github.com/maryamriaz620-dot" target="_blank" rel="noreferrer">GitHub profile <Github size={16} /></a>
              <span className="link-placeholder">Add project repository / live demo URL when available</span>
            </div>
          </div>
        </article>
        <div className="future-project"><span>+</span><div><b>More work is on the way</b><small>Additional projects will appear here as they are completed.</small></div></div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="container education-layout">
        <div><SectionTitle eyebrow="MY BACKGROUND" title="Learning is a" accent="journey." description="My academic foundation and the starting point of my professional journey." /></div>
        <div className="timeline">
          <div className="timeline-line" />
          <article className="timeline-item">
            <span className="timeline-dot"><GraduationCap size={19} /></span>
            <div className="timeline-card">
              <div className="timeline-date">2026 <span>· GRADUATED</span></div>
              <h3>BS Information Technology</h3>
              <p className="institution">Virtual University of Pakistan</p>
              <p>Completed an undergraduate degree in Information Technology, building a foundation in computing and technology.</p>
              <span className="degree-tag">Bachelor's Degree</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Objective() {
  return (
    <section className="objective-section">
      <div className="container objective-inner">
        <span className="eyebrow">WHAT'S NEXT</span>
        <h2>Motivated to build.<br /><span>Ready to grow.</span></h2>
        <p>As a fresh Information Technology graduate, I am looking for opportunities to begin my professional journey in web development. I aim to apply my knowledge of HTML, CSS, JavaScript, and React to develop responsive and user-friendly websites while continuously learning and growing.</p>
        <a href="#contact" className="text-link">Let’s create something meaningful <ArrowUpRight size={17} /></a>
        <div className="objective-orb" />
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.subject.trim()) next.subject = 'Please enter a subject.'
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters.'
    setErrors(next)
    if (Object.keys(next).length) { setNotice(''); return }
    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
    setNotice('Your details are ready. Your email app will open so you can send the message.')
    window.location.href = mailto
  }

  return (
    <section className="section section-soft" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <SectionTitle eyebrow="GET IN TOUCH" title="Let's" accent="connect!" description="I am excited to explore opportunities in web development, internships, entry-level positions, and professional collaborations." />
          <a className="contact-method" href={`mailto:${emailAddress}`}><span><Mail /></span><div><small>EMAIL ME</small><b>{emailAddress}</b></div><ArrowUpRight /></a>
          <a className="contact-method" href="https://github.com/maryamriaz620-dot" target="_blank" rel="noreferrer"><span><Github /></span><div><small>GITHUB</small><b>maryamriaz620-dot</b></div><ArrowUpRight /></a>
          <a className="contact-method" href="https://www.linkedin.com/in/maryam-riaz-930025400/" target="_blank" rel="noreferrer"><span><Linkedin /></span><div><small>LINKEDIN</small><b>Maryam Riaz</b></div><ArrowUpRight /></a>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-heading"><h3>Send a message</h3><p>Have an opportunity or a question? Write me a note.</p></div>
          <div className="form-row">
            <label>Your name<input name="name" value={form.name} onChange={update} placeholder="e.g. Alex Morgan" aria-invalid={!!errors.name} />{errors.name && <small className="error">{errors.name}</small>}</label>
            <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" aria-invalid={!!errors.email} />{errors.email && <small className="error">{errors.email}</small>}</label>
          </div>
          <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What would you like to discuss?" aria-invalid={!!errors.subject} />{errors.subject && <small className="error">{errors.subject}</small>}</label>
          <label>Message<textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Tell me a little about it..." aria-invalid={!!errors.message} />{errors.message && <small className="error">{errors.message}</small>}</label>
          <button className="button button-primary form-submit" type="submit">Prepare email <Send size={16} /></button>
          {notice && <p className="form-notice" role="status"><CheckCircle2 size={16} />{notice}</p>}
          <p className="form-disclaimer">This form validates your message and opens your email app. Direct website delivery requires an email service or backend integration.</p>
        </form>
      </div>
    </section>
  )
}

export default function App() {
  return <><Navbar /><main><Hero /><About /><Skills /><Projects /><Education /><Objective /><Contact /></main><Footer /></>
}
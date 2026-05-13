import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Analytics } from "@vercel/analytics/react";
import {
  ArrowRight,
  Certificate,
  Clock,
  FilmReel,
  ForkKnife,
  Gift,
  MapPin,
  MonitorPlay,
  VideoCamera
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const registrationUrl =
  "https://forms.gle/CLp6RirASRdoxAMo6";
const registrationPath = "/register";
const mapsUrl = "https://maps.app.goo.gl/ufEYLRXZn9L4NhPp8";
const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3745248667524!2d78.45853489999999!3d17.441779399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913311bfd3f1%3A0xd2a8866290e57f77!2sLINCHPIN%20SOFT%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1778665181522!5m2!1sen!2sin";

const stats = [
  { label: "registrations", value: "50", note: "limited seats" },
  { label: "entry fee", value: "₹299", note: "per participant" },
  { label: "prize pool", value: "₹50K", note: "cash prizes" }
];

const benefits = [
  { title: "Raw footage provided", icon: FilmReel },
  { title: "Participation certificate", icon: Certificate },
  { title: "Complimentary lunch", icon: ForkKnife },
  { title: "Exclusive goodies", icon: Gift },
  { title: "Paid internship route", icon: VideoCamera }
];

const schedule = [
  {
    time: "09:00 - 09:30",
    title: "Reporting and registration",
    body: "Check-in, onboarding, workstation setup, and challenge briefing."
  },
  {
    time: "09:30 - 12:30",
    title: "Editing challenge",
    body: "Participants cut two videos from provided footage with judging across story, rhythm, audio sync, transitions, and presentation."
  },
  {
    time: "12:30 - 13:30",
    title: "Lunch break",
    body: "Lunch and refreshments on-site before final refinement begins."
  },
  {
    time: "13:30 - 15:30",
    title: "Final edit and submission",
    body: "Lock the timeline, polish sound, export cleanly, and submit final deliverables."
  },
  {
    time: "15:30 - 16:00",
    title: "Awards and recognition",
    body: "Winner announcements, prize distribution, certificates, and closing ceremony."
  }
];

const audience = ["Video editors", "Assistant editors", "Reels editors", "YouTube editors", "Film students", "Freelance editors"];

function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (window.location.pathname === registrationPath) {
      window.location.replace(registrationUrl);
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        opacity: 0,
        y: 42,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08
      });

      gsap.to(".hero-mark", {
        yPercent: -14,
        rotate: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.utils.toArray(".timeline-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          x: -48,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 78%"
          }
        });
      });

      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".marquee",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.utils.toArray(".benefit-tile").forEach((tile, index) => {
        gsap.from(tile, {
          opacity: 0,
          y: 36,
          rotate: index % 2 === 0 ? -2 : 2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tile,
            start: "top 86%"
          }
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef}>
      <NoiseLayer />
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-lockup" href="#top" aria-label="Editathon home">
          <img src="/linchpin-logo.png" alt="Linchpin" />
          <span>Editathon</span>
        </a>
        <div className="nav-links">
          <a href="#schedule">Schedule</a>
          <a href="#rewards">Rewards</a>
          <a href="#location">Location</a>
          <a href="#register">Register</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>
            Linchpin presents
          </p>
          <h1 data-reveal>
            Cut. Create. <span>Compete.</span>
          </h1>
          <p className="hero-lede" data-reveal>
            A one-day video editing hackathon for Hyderabad editors who can turn raw footage into sharp stories under pressure.
          </p>
          <div className="hero-actions" data-reveal>
            <a className="primary-cta" href={registrationPath}>
              Register for ₹299
              <ArrowRight size={19} weight="bold" />
            </a>
            <a className="secondary-cta" href="#schedule">View schedule</a>
          </div>
          <div className="event-meta" data-reveal>
            <span>
              <Clock size={18} weight="bold" />
              15 May 2026, 9:00 AM
            </span>
            <span>
              <MapPin size={18} weight="bold" />
              Linchpin Soft Solutions
            </span>
          </div>
        </div>

        <div className="hero-art" aria-label="Custom Editathon editing interface visual">
          <div className="edit-console" data-reveal>
            <div className="console-topline">
              <img src="/linchpin-logo.png" alt="Linchpin" />
              <span>creator bay 01</span>
            </div>
            <div className="preview-screen">
              <div className="screen-grid" aria-hidden="true" />
              <div className="screen-title">
                <MonitorPlay size={34} weight="duotone" />
                <span>Editathon 2026</span>
              </div>
              <div className="playhead" aria-hidden="true" />
            </div>
            <div className="timeline-board" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="console-footer">
              <span>story</span>
              <span>sync</span>
              <span>grade</span>
              <span>export</span>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <FilmReel size={92} weight="thin" />
            <span>2026</span>
          </div>
          <div className="prize-burst" data-reveal>
            <span>cash prizes up to</span>
            <strong>₹50,000</strong>
          </div>
        </div>
      </section>

      <section className="stat-strip" aria-label="Event quick facts">
        {stats.map((stat) => (
          <div className="stat-unit" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.note}</small>
          </div>
        ))}
      </section>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Storytelling</span>
          <span>Audio Sync</span>
          <span>Transitions</span>
          <span>Presentation</span>
          <span>Rhythm</span>
          <span>Storytelling</span>
          <span>Audio Sync</span>
          <span>Transitions</span>
          <span>Presentation</span>
          <span>Rhythm</span>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">About the event</p>
          <h2>Raw footage in. Finished story out.</h2>
        </div>
        <p>
          Editathon 2026 brings video editors, assistant editors, students, and freelance cutters into one room for a focused production sprint. Participants will compete, collaborate, and show how they solve story, sound, pacing, and polish when the clock is live.
        </p>
      </section>

      <section className="section rewards-section" id="rewards">
        <div className="section-heading">
          <p className="eyebrow">What to expect</p>
          <h2>Everything needed for a serious edit sprint.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article className="benefit-tile" key={benefit.title} style={{ "--tile-index": index }}>
                <Icon size={34} weight="duotone" />
                <h3>{benefit.title}</h3>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section schedule-section" id="schedule">
        <div className="sticky-copy">
          <p className="eyebrow">Event schedule</p>
          <h2>A precise production day from briefing to awards.</h2>
          <p>
            No spot entries. The room is capped at 50 registered participants so the judging, lunch, footage handoff, and submission process stay controlled.
          </p>
        </div>
        <div className="timeline">
          {schedule.map((item, index) => (
            <article className="timeline-item" key={item.title}>
              <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <time>{item.time}</time>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section audience-section">
        <div className="section-heading">
          <p className="eyebrow">Target audience</p>
          <h2>Built mainly for video editors.</h2>
        </div>
        <div className="audience-grid">
          {audience.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section location-section" id="location">
        <div className="location-copy">
          <p className="eyebrow">Venue</p>
          <h2>LINCHPIN SOFT SOLUTIONS PVT LIMITED.</h2>
          <p>
            The event is now hosted at Linchpin Soft Solutions. Use the map below for directions and plan to reach before the 9:00 AM reporting window.
          </p>
          <a className="secondary-cta map-link" href={mapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
            <MapPin size={18} weight="bold" />
          </a>
        </div>
        <div className="map-frame" aria-label="Map to Linchpin Soft Solutions">
          <iframe
            title="Linchpin Soft Solutions location"
            src={mapsEmbedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="register-section" id="register">
        <div className="register-panel">
          <div>
            <p className="eyebrow">Limited registrations</p>
            <h2>50 seats. No spot entries.</h2>
            <p>
              Register in advance for ₹299 per participant. Winners compete for a ₹50K prize pool, and standout editors may be considered for paid internship opportunities.
            </p>
          </div>
          <div className="register-actions">
            <a className="primary-cta" href={registrationPath}>
              Register on Google Forms
              <ArrowRight size={18} weight="bold" />
            </a>
            <div className="seat-meter" aria-label="Registration cap">
              <span>Seat cap</span>
              <strong>50</strong>
              <small>advance registrations only</small>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>Editathon 2026</span>
        <span>Friday, 15 May 2026</span>
        <span>LINCHPIN SOFT SOLUTIONS PVT LIMITED</span>
      </footer>
      <Analytics />
    </main>
  );
}

function NoiseLayer() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="corner-slash slash-one" aria-hidden="true" />
      <div className="corner-slash slash-two" aria-hidden="true" />
      <div className="dot-field dot-left" aria-hidden="true" />
      <div className="dot-field dot-right" aria-hidden="true" />
    </>
  );
}

export default App;

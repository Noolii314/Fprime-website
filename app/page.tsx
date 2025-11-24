"use client";

import { useState } from "react";

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="logo">
          <div className="logo-img">
            <span>Fp</span>
          </div>
          <div>
            <div className="logo-text">Fprime</div>
            <span className="logo-sub">Applied AI</span>
          </div>
        </div>

        <nav className={`nav ${navOpen ? "nav-open" : ""}`}>
          <a href="#hero">Home</a>
          <a href="#industries">Industries</a>
          <a href="#how-it-works">How we work</a>
          <a href="#about">Why Fprime</a>
          <a href="#contact" className="nav-cta">
            Book a call
          </a>
        </nav>

        <button
          className={`nav-toggle ${navOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="panel">
          <div className="panel-content">
            <div className="eyebrow">Applied AI studio</div>
            <h1>We don&apos;t “experiment” with AI. We weaponize it for your business.</h1>
            <p className="hero-kicker">
              Fprime hunts down the weakest points in your operation – in industry, retail,
              finance, agriculture or anywhere money leaks – and replaces them with AI systems
              that buy you time, margin and market share.
            </p>

            <div className="hero-badges">
              <span className="hero-badge">Industrial &amp; manufacturing</span>
              <span className="hero-badge">Retail &amp; e-commerce</span>
              <span className="hero-badge">Financial services &amp; risk</span>
              <span className="hero-badge">Agriculture &amp; supply chain</span>
            </div>

            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Book a 30-minute diagnosis
              </a>
              <a href="#industries" className="btn btn-secondary">
                See where AI actually pays off
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <span className="hero-dot" />
                From idea to production pilot in weeks, not years.
              </span>
              <span>We speak CFO and COO, not just “models” and “APIs”.</span>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section id="industries" className="panel">
          <div className="panel-content wide">
            <div className="eyebrow">Sector-specific AI</div>
            <h2>AI that understands balance sheets, not just benchmarks.</h2>
            <p
              style={{
                maxWidth: "640px",
                color: "var(--text-muted)",
                marginTop: "0.3rem",
              }}
            >
              We start from your P&amp;L: where time is wasted, margin evaporates and risk piles up.
              Then we build models and workflows that slot into the systems you already run – not
              into a “lab environment” no one touches.
            </p>

            <div className="industries-grid">
              <article className="card">
                <div className="card-tag">Industry &amp; Manufacturing</div>
                <h3>Fewer stoppages. Fewer defects. Fewer excuses.</h3>
                <p>
                  Use AI to predict downtime, defects and bottlenecks before they cost you a shift
                  or a customer.
                </p>
                <ul>
                  <li>Predictive maintenance on critical lines and assets</li>
                  <li>Anomaly detection on sensor streams and telemetry</li>
                  <li>Production planning that respects reality, not spreadsheets</li>
                </ul>
              </article>

              <article className="card">
                <div className="card-tag">Retail &amp; Commerce</div>
                <h3>Your stores should know the customer before they walk in.</h3>
                <p>
                  From intelligent stocking to hyper-relevant recommendations online and in-store.
                </p>
                <ul>
                  <li>Demand forecasting and inventory optimization</li>
                  <li>Recommendation engines for e-commerce and POS</li>
                  <li>Automated sentiment and feedback analysis at scale</li>
                </ul>
              </article>

              <article className="card">
                <div className="card-tag">Finance</div>
                <h3>Faster decisions, cleaner portfolios, tighter risk.</h3>
                <p>
                  AI that augments your credit, risk and operations teams instead of adding noise.
                </p>
                <ul>
                  <li>Credit scoring models tuned to your book, not generic data</li>
                  <li>Real-time anomaly and fraud detection on transactions</li>
                  <li>AI-driven document and KYC automation that actually works</li>
                </ul>
              </article>

              <article className="card">
                <div className="card-tag">Agriculture &amp; Supply chain</div>
                <h3>From field to shelf, with less waste and guesswork.</h3>
                <p>
                  Combine ground data, satellite feeds and market signals into one decisive view.
                </p>
                <ul>
                  <li>Yield and disease forecasting per crop, per parcel</li>
                  <li>Supply and logistics optimization across your network</li>
                  <li>Computer-vision monitoring of fields, silos and warehouses</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="panel">
          <div className="panel-content wide">
            <div className="eyebrow">A sharp process</div>
            <h2>
              We don&apos;t do “innovation theatre”. We build tools your people refuse to give up.
            </h2>
            <p
              style={{
                maxWidth: "640px",
                color: "var(--text-muted)",
                marginTop: "0.3rem",
              }}
            >
              Every engagement with Fprime runs through the same ruthless funnel.
              You know what you’re investing in, what we’re testing and when you’ll see numbers,
              not adjectives.
            </p>

            <div className="process-grid">
              <div className="step">
                <div className="step-number">01</div>
                <h3>Problem framing with teeth</h3>
                <p>
                  We dissect your current processes, costs and data. Together we pick 1–2 problems
                  where AI can generate measurable ROI within 6–12 months, or we don&apos;t proceed.
                </p>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <h3>A real prototype, not a slide deck</h3>
                <p>
                  We ship a working prototype wired into your real data. Your operational teams
                  stress-test it. We iterate based on what they can&apos;t break, not what looks cute
                  in a demo.
                </p>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <h3>Integration into the brutal day-to-day</h3>
                <p>
                  We plug the solution into your stack (ERP, CRM, core banking, WMS, whatever you run)
                  and redesign workflows so people use it by default, not out of politeness.
                </p>
              </div>
              <div className="step">
                <div className="step-number">04</div>
                <h3>Hard metrics or we turn it off</h3>
                <p>
                  Clear KPIs, transparent monitoring, no hand-waving. If the pilot hits the ROI
                  threshold, we scale it. If not, we kill it and move to the next, better target.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="panel">
          <div className="panel-content wide">
            <div className="eyebrow">Why Fprime</div>
            <h2>Technical enough for your engineers. Ruthless enough for your P&amp;L.</h2>

            <div className="about-layout">
              <div>
                <p style={{ color: "var(--text-muted)" }}>
                  We come from two worlds: data engineering and running real businesses.
                  That means every model, dashboard and automation we build is tied directly
                  to profit, loss and risk – not just “accuracy” on a slide.
                </p>

                <div className="pill-list">
                  <span className="pill">Obsessed with ROI and payback, not hype</span>
                  <span className="pill">Projects measured in weeks, not years</span>
                  <span className="pill">We brief boards as easily as we brief dev teams</span>
                  <span className="pill">We work with the messy data you have today</span>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <strong>20–40%</strong>
                  Typical cut in manual time for targeted processes once AI automation is in place.
                </div>
                <div className="stat">
                  <strong>3–6 months</strong>
                  Our usual horizon to see the first financial ROI from a single pilot.
                </div>
                <div className="stat">
                  <strong>Full-stack</strong>
                  From strategy and data plumbing to modelling and front-end implementation.
                </div>
                <div className="stat">
                  <strong>Tool-agnostic</strong>
                  We pick the best tech for your case – not the one with the loudest marketing.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="panel">
          <div className="panel-content wide">
            <div className="eyebrow">First move</div>
            <h2>Let&apos;s pick the first problem AI will crush for you.</h2>
            <p
              style={{
                maxWidth: "620px",
                color: "var(--text-muted)",
                marginTop: "0.3rem",
              }}
            >
              Tell us where you&apos;re currently bleeding the most time, money or opportunity.
              We&apos;ll come back with 2–3 specific AI angles – no fluff, no obligation.
            </p>

            <div className="contact-grid">
              <div>
                <div className="badge-live">
                  <span className="badge-live-dot" />
                  Limited monthly slots for new projects
                </div>

                <form>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="e.g. Alex Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder="e.g. Fprime Group"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Work email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="e.g. alex@yourcompany.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="sector">Sector / industry</label>
                    <input
                      id="sector"
                      type="text"
                      name="sector"
                      placeholder="e.g. Retail, finance, manufacturing…"
                    />
                  </div>

                  <div>
                    <label htmlFor="message">
                      What&apos;s the #1 problem you want AI to solve?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Be blunt. For example: we constantly have stockouts in some locations and dead stock in others; we want better forecasting and automated ordering."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send &amp; request a diagnosis call
                  </button>

                  <p className="contact-note">
                    This form is front-end only. Wire it up to your own backend (email API, CRM,
                    ticketing, etc.) in the way that fits your stack.
                  </p>
                </form>
              </div>

              <div className="contact-side">
                <h3>What the call actually looks like</h3>
                <ul className="contact-list">
                  <li>• 30-minute online call with the people who actually decide.</li>
                  <li>• We go through 2–3 processes where you feel AI has real potential.</li>
                  <li>• You get a short, sharp summary with concrete options and next steps.</li>
                  <li>
                    • If there&apos;s a fit, we design a small, ruthless pilot – not a science project.
                  </li>
                </ul>

                <h3 style={{ marginTop: "1.4rem" }}>Prefer email?</h3>
                <p>
                  You can also reach us at:
                  <br />
                  <strong>hello@fprime.ai</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>
          © <span>{year}</span> Fprime. Applied AI for operators who like to win.
        </span>
      </footer>
    </>
  );
}

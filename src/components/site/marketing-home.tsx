import Link from "next/link";

const priorities = [
  { number: "01", title: "Home time", copy: "Daily, weekly, or a schedule that gives you room to plan." },
  { number: "02", title: "The work", copy: "OTR, regional, local, or dedicated lanes that match your experience." },
  { number: "03", title: "The path", copy: "A clear W-2 application or a recruiter-assisted 1099 conversation." },
];

const steps = [
  ["01", "Tell us what fits", "Start with the route, home time, and work questions that matter to you."],
  ["02", "Review a real next step", "We explain the opportunity and the correct application path before you commit."],
  ["03", "Move forward clearly", "You choose whether to continue. The hiring carrier makes the final decision."],
];

export default function MarketingHome() {
  return (
    <div className="marketing-site">
      <header className="marketing-header">
        <Link className="marketing-brand" href="/" aria-label="TTI Recruiting home">
          <span className="marketing-brand-mark">TTI</span>
          <span className="marketing-brand-name">Recruiting</span>
        </Link>
        <nav className="marketing-nav" aria-label="Main navigation">
          <Link href="/jobs">Find a job</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/faq">Questions</Link>
          <Link className="marketing-nav-action" href="/contact">Talk with a recruiter <span aria-hidden>↗</span></Link>
        </nav>
        <details className="marketing-mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link href="/jobs">Find a job</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/faq">Questions</Link>
            <Link href="/contact">Talk with a recruiter</Link>
          </nav>
        </details>
      </header>

      <main>
        <section className="marketing-hero">
          <div className="marketing-hero-copy">
            <p className="marketing-eyebrow"><span aria-hidden /> CDL recruiting, made clearer</p>
            <h1>Find a driving job that fits your <i>life.</i></h1>
            <p className="marketing-hero-lede">Search for the kind of CDL-A work you want, compare the details that matter, and get help taking the right application path.</p>
            <div className="marketing-actions">
              <Link className="marketing-button marketing-button-primary" href="/jobs">Find My Next Driving Job <span aria-hidden>↗</span></Link>
              <Link className="marketing-button marketing-button-secondary" href="/contact">Talk With a Recruiter</Link>
            </div>
            <p className="marketing-disclaimer">TTI Recruiting is the intermediary. The hiring carrier makes the employment decision.</p>
          </div>
          <div className="marketing-finder" aria-labelledby="finder-title">
            <div className="marketing-finder-top"><span>Start here</span><span className="marketing-status"><span aria-hidden /> Human help available</span></div>
            <h2 id="finder-title">What matters most in your next move?</h2>
            <div className="marketing-finder-list">
              <Link href="/jobs?homeTime=daily"><span className="marketing-finder-index">A</span><span><strong>Getting home more often</strong><small>Local, regional, or dedicated routes</small></span><span aria-hidden>→</span></Link>
              <Link href="/jobs?driverType=otr"><span className="marketing-finder-index">B</span><span><strong>Finding the right kind of work</strong><small>Match the lane to your experience</small></span><span aria-hidden>→</span></Link>
              <Link href="/contact"><span className="marketing-finder-index">C</span><span><strong>Talking it through first</strong><small>Get a recruiter’s help before applying</small></span><span aria-hidden>→</span></Link>
            </div>
            <p className="marketing-finder-note">No pressure. No public document upload. Just a clearer next step.</p>
          </div>
        </section>

        <section className="marketplace-search" aria-labelledby="search-title">
          <div><p className="marketing-eyebrow">Find your next opportunity</p><h2 id="search-title">Search by the work you want.</h2><p>Start with a route, location, or home-time preference. We only publish offer details after review.</p></div>
          <form className="marketplace-search-form" action="/jobs"><label htmlFor="job-search">Search opportunities</label><div><input id="job-search" name="q" placeholder="Try “regional flatbed”" /><button type="submit">Search jobs <span aria-hidden>↗</span></button></div><div className="marketplace-filter-links"><Link href="/jobs?driverType=otr">OTR</Link><Link href="/jobs?driverType=regional">Regional</Link><Link href="/jobs?driverType=local">Local</Link><Link href="/jobs?homeTime=daily">Daily home time</Link></div></form>
        </section>

        <section className="marketing-proof-rail" aria-label="TTI Recruiting principles">
          <span>01 / Recruiter, not carrier</span><span>02 / Driver-first conversations</span><span>03 / Verified details only</span>
        </section>

        <section className="marketing-section marketing-section-priorities" aria-labelledby="priorities-title">
          <div className="marketing-section-intro"><p className="marketing-eyebrow">The useful stuff first</p><h2 id="priorities-title">A better way to compare a driving job.</h2><p>Pay matters. So does the week you’ll actually live. We help you get to the right questions before the paperwork.</p></div>
          <div className="marketing-priority-grid">{priorities.map((priority) => <article className="marketing-priority-card" key={priority.number}><span>{priority.number}</span><h3>{priority.title}</h3><p>{priority.copy}</p></article>)}</div>
        </section>

        <section className="marketing-opportunities" aria-labelledby="opportunities-title">
          <div className="marketing-section-heading-row"><div><p className="marketing-eyebrow">The opportunity desk</p><h2 id="opportunities-title">Only reviewed offers belong here.</h2></div><Link className="marketing-text-link" href="/jobs">Browse opportunities <span aria-hidden>↗</span></Link></div>
          <div className="marketing-empty-state"><div className="marketing-empty-icon" aria-hidden>—</div><div><span className="marketing-label">Catalog status / Refresh in progress</span><h3>We’re holding unverified job details back.</h3><p>Want to know what might fit? A recruiter can talk through your route and home-time needs while the public catalog is being refreshed.</p></div><Link className="marketing-button marketing-button-dark" href="/contact">Talk with a recruiter</Link></div>
        </section>

        <section className="marketing-process" aria-labelledby="process-title"><div className="marketing-process-intro"><p className="marketing-eyebrow marketing-eyebrow-light">How it works</p><h2 id="process-title">Less guessing.<br /><i>More clarity.</i></h2></div><ol>{steps.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></section>

        <section className="marketing-cta"><p className="marketing-eyebrow">Your next move can start small</p><h2>Have a question?<br /><i>Bring it.</i></h2><Link className="marketing-button marketing-button-primary" href="/contact">Talk With a Recruiter <span aria-hidden>↗</span></Link></section>
      </main>

      <footer className="marketing-footer"><div><Link className="marketing-brand" href="/"><span className="marketing-brand-mark">TTI</span><span className="marketing-brand-name">Recruiting</span></Link><p>Clearer recruiting conversations for CDL-A drivers.</p></div><nav aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/for-carriers">For carriers</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav><p className="marketing-footer-note">TTI Recruiting is not the employing carrier.</p></footer>
    </div>
  );
}
